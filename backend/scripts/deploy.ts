import { parseEther } from "ethers/lib/utils";
import { ethers, run } from "hardhat";

const MAX_NFTS = 100;

async function main() {
  // This function deploys all the contracts related to this workshop

  // Deploy the NFT contract
  const wholesomeNftAddress = await deployWholesomeNFT();
  console.log(
    `Deployed WholesomeNFT contract at address: ${wholesomeNftAddress}`
  );

  // Deploy the Fake NFT Marketplace contract
  const fakeNftMarketplaceAddress = await deployFakeNFTMarketplace();
  console.log(
    `Deployed FakeNFTMarketplace at address: ${fakeNftMarketplaceAddress}`
  );

  // const wholesomeNftAddress = "0x30Cd01010091B11C7424dD20f103dd9473D5cCD0";
  // const fakeNftMarketplaceAddress =
  //   "0x6A67592Cc98876CE7e4Cd2B41Fc13048aB616eAb";
  // const wholesomeDaoAddress = "0x9c67E2E9c0F7a82a261986650569259dD1447383";
  // Deploy the DAO contract
  const wholesomeDaoAddress = await deployWholesomeDAO(
    wholesomeNftAddress,
    fakeNftMarketplaceAddress
  );

  console.log(
    `Deployed WholesomeDAO contract at address: ${wholesomeDaoAddress}`
  );

  if (process.env.ETHERSCAN_API_KEY) {
    // Verify NFT contract on Etherscan
    await run("verify:verify", {
      address: wholesomeNftAddress,
      constructorArguments: [MAX_NFTS],
    });

    // Verify Marketplace contract on Etherscan
    await run("verify:verify", {
      address: fakeNftMarketplaceAddress,
      constructorArguments: [],
    });

    // Verify DAO contract on Etherscan
    await run("verify:verify", {
      address: wholesomeDaoAddress,
      constructorArguments: [wholesomeNftAddress, fakeNftMarketplaceAddress],
    });
  }
}

async function deployWholesomeDAO(
  nftContract: string,
  marketplaceContract: string
): Promise<string> {
  const DAO = await ethers.getContractFactory("WholesomeDAO");

  // Deploy the contract and pass it 0.1 ETH to fund the treasury initially
  const wholesomeDAO = await DAO.deploy(nftContract, marketplaceContract, {
    value: parseEther("0.05"),
  });

  await wholesomeDAO.deployed();

  return wholesomeDAO.address;
}

async function deployFakeNFTMarketplace(): Promise<string> {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy({
    value: parseEther("0.05"),
  });
  await fakeNftMarketplace.deployed();

  return fakeNftMarketplace.address;
}

async function deployWholesomeNFT(): Promise<string> {
  const NFT = await ethers.getContractFactory("WholesomeNFT");
  const wholesomeNFT = await NFT.deploy(MAX_NFTS);

  await wholesomeNFT.deployed();

  return wholesomeNFT.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
