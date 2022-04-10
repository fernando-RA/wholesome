import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x62ac837C5fddf75A3E292687B5933fC60d64F55A",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "WHOLESOME DAO Proposals",
      votingTokenAddress: "0x5964342bFAE159b734b75985eC1399e4C99b0A9E",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();
