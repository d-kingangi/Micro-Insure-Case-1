require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env"});

module.exports = {
  solidity: {
      version: "0.8.15",
      settings: {
          optimizer: {
              enabled: true,
              runs: 200,
          },
      },
  },
networks:{
  alfajores:{
    url: process.env.RPC_URL,
    chainId: 44787,
    accounts: {
      mnemonic: process.env.MNEMONIC,
      path: "m/44'/60'/0'/0",
    }
  }
}
};
//Finally, create a deploy script at scripts/deploy.js:

const hre = require("hardhat")

async function main() {
const CropInsurance = await hre.ethers.getContractFactory("CropInsurance");
const cropInsurance = await CropInsurance.deploy();
await cropInsurance.deployed("<CUSD_ADDRESS>");
console.log("CropInsurance deployed to:", cropInsurance.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});