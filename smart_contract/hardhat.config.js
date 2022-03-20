// https://eth-ropsten.alchemyapi.io/v2/hmU_gi8OiBmU31rqf-7bv7xKwJhnAC8g

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hmU_gi8OiBmU31rqf-7bv7xKwJhnAC8g',
      accounts: ['2fd18206fe87f6272890a66cc42a0a30915c82a76a46f0ee89f200bc2c713d48'],
    },
  },
};