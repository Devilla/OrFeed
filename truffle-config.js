const Web3 = require("web3");
const web3 = new Web3();
const { readFileSync } = require('fs');
// the mnemonic phrase to an account with some ETH in the respective network
const mnemonic = readFileSync(".secret").toString().trim();

// the infura project id's
const mainnetInfuraProjectID = "fj4jll3k.....";
const kovanInfuraProjectID = "fj4jll3k.....";
const rinkebyInfuraProjectID = "fj4jll3k.....";
const HDWalletProvider = require('truffle-hdwallet-provider');

networks = {

  mainnet: {
    provider: function () {
      return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/${mainnetInfuraProjectID}`);
    },
    gasPrice: web3.utils.toWei('10', 'gwei'),
    network_id: 1
  },
  kovan: {
    provider: function () {
      return new HDWalletProvider(mnemonic, `https://kovan.infura.io/${kovanInfuraProjectID}`);
    },
    gasPrice: web3.utils.toWei('10', 'gwei'),
    network_id: 42
  },
  rinkeby: {
    provider: function () {
      return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${rinkebyInfuraProjectID}`);
    },
    gasPrice: web3.utils.toWei('10', 'gwei'),
    network_id: 4
  },
  development: {
    host: process.env.TRUFFLE_DEVELOP_HOST || 'localhost',
    port: process.env.TRUFFLE_DEVELOP_PORT || 7545,
    gasPrice: web3.utils.toWei('10', 'gwei'),
    network_id: '*' // Match any network id
  },
};
compilers = {
  solc: {
    version: '0.5.16'
  }
};