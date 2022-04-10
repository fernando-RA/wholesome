import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xA2451e2626D16a146c92C6cDf68D8Ef1B9b3B8b4",
);

(async () => {
  try {
    const amount = 100_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$WHOLESOME in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();