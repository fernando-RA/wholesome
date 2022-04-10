import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x62ac837C5fddf75A3E292687B5933fC60d64F55A");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "WholesomeDAO Governance Token",
      symbol: "WHOLESOME",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();