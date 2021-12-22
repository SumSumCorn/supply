require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    private: {
      host: "34.64.75.104",
      port: 30045,
      network_id: "*", // Match any network id
      from: "0x945cd603a6754cb13c3d61d8fe240990f86f9f8a",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/artifacts/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
