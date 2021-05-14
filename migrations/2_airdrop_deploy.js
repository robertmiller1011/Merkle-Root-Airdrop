const Airdrop = artifacts.require("Airdrop");

module.exports = async function (deployer, network, accounts) {

  var tokenAddress = "0x765a6c174202a78561c986684df1004cbf38faeb"; 
  var initialBalance = '30000000000000000000000';
  var merkleRoot = '0x8216c87adb0f67e34781477e815224d6a9f44bb2c988c131f9974f8e6d5cffa6';

  await deployer.deploy(Airdrop, tokenAddress, initialBalance, merkleRoot); // # plus 18 zeros

  const airdrop = await Airdrop.deployed();

};

