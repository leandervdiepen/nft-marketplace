require("@nomiclabs/hardhat-waffle");

const projectID = process.env.INFURA_PROJECT_ID;
const secretKey = process.env.WALLET_SECRET_KEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
      projectID: process.env.INFURA_PROJECT_ID,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [],
    },
    mainNet: {
      url: `https://mainnet.infura.io/v3/${projectID}`,
      accounts: [],
    },
  },
  solidity: "0.8.4",
};
