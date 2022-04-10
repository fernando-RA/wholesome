import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x07D2bb493Ca8ebF2FE760d157Af2e761921Dd376",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "WHOLESOME",
        description: "This NFT will give you access to wholesomeDAO.com",
        image: readFileSync("scripts/assets/wholesomeNFT_image.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()