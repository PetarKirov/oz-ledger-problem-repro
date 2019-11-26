require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const regeneratorRuntime = require('regenerator-runtime');
const LedgerProvider = require('truffle-ledger-provider');

const ledgerOptions = {
  networkId: 42,
  path: "44'/60'/0'/0/0",
  askConfirm: true,
  accountsLength: 1,
  accountsOffset: 0
};

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    kovan: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 42,
      gas: 7000000,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    kovan_ledger: {
      provider: () => new LedgerProvider(ledgerOptions, `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 42,
      gas: 7000000,
      timeoutBlocks: 200,
      skipDryRun: false
    },
    ropsten_ledger: {
      provider: () => new LedgerProvider(ledgerOptions, `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 3,
      gas: 7000000,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet_ledger: {
      provider: () => new LedgerProvider(ledgerOptions, `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 1,
      gas: 100000,
      timeoutBlocks: 200,
      skipDryRun: false
    },
  },

  compilers: {
    solc: {
      version: "0.5.7",
       optimizer: {
         enabled: false,
         runs: 200
       },
    }
  }
}
