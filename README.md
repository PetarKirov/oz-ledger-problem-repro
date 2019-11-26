# oz-ledger-problem-repro

This repo showcases a problem when deploying contracts with the [`oz`][1] CLI
tool while using Ledger Nano to sign the transactions. The problem comes from the
ledger web3 provider.

Steps to reproduce:
```sh
# Clone the git repository:
git clone https://github.com/PetarKirov/oz-ledger-problem-repro.git

# Enter the repo dir:
cd oz-ledger-problem-repro

# Copy the sample `.env.example` file to `.env`
cp .env.example .env
# Open the `.env` file and fill the INFURA_KEY env variable

# Install npm dependencies
npm i

# Intialize openzeppelin project (confirm all prompts):
npx oz init

# Test contract deployment on `kovan` network using HDWalletProvider:
npx oz create JarvisRewardToken --network kovan --init 'initialize()'
# (Observe that the deployment succeeds.)

# Test contract deployment on `kovan_ledger` network using LedgerProvider:
npx oz create JarvisRewardToken --network kovan_ledger --init 'initialize()'
# (Approve all transaction signing requests on the Ledger)
# ...
```

Observe that the deployment fails with following error:
```
✖ Creating instance for contract at 0xD39cB619356332591Ea141eb73c788124B0b9E91 and calling 'initialize' with no arguments
Failed to subscribe to new newBlockHeaders to confirm the transaction receipts.
{}
```

[1]: https://www.npmjs.com/package/@openzeppelin/cli
