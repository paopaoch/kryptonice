// https://eth-goerli.g.alchemy.com/v2/R6J6oHeWstAHFVzQJYX1x-V0OEkYQ0kY

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/8WZxobEFmc31cAUPAst4NOA3L5rSr5de',
      accounts: ['d53eb60155d7671ff3cd1e23be88e659e5482e6d69d51e4afac70fb62fbc0073']
    }
  }
}