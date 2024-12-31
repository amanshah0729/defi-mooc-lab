require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1,
      mining: {
        auto: true,
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      accounts: {
        mnemonic: "swap swap swap swap swap swap swap swap swap swap swap swap"
      },
      forking: process.env.ALCHE_API
        ? {
            url: process.env.ALCHE_API,
            blockNumber: 12489619, // Optional: set block number here if required globally
          }
        : undefined, // Ensure fallback to avoid undefined errors
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 600000,
  },
};
