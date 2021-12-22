const Asset = artifacts.require("./Asset.sol");

module.exports = async function(callback) {
  try {
    console.log(Asset.abi, Asset.bytecode);
    const assetContract = new web3.eth.Contract(Asset.abi);
    assetContract
      .deploy({
        data: Asset.bytecode,
        arguments: ["My Product"],
      })
      .send({
        from: "0x945cd603a6754cb13c3d61d8fe240990f86f9f8a",
      })
      .on("receipt", (receipt) => {
        console.log(receipt.contractAddress); // contains the new contract address
      });
  } catch (error) {
    console.log(error);
  }

  callback();
};
