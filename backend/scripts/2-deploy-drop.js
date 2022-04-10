import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x62ac837C5fddf75A3E292687B5933fC60d64F55A");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "WholesomeDAO Membership",
      description: "exclusive WholesomeDAO.com membership",
      image: readFileSync("scripts/assets/wholesomeDAO_logo.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()