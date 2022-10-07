require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million protect give knife bone suspect'; 
let testAccounts = [
"0xd6b5864e3c901af73e40aec1acd2219ac2ae6c719fb9a192756913d307f5342d",
"0x4763535c75204fbf930b342310caec5c98669d1900e7b98fd30321df3ec639e0",
"0x075e5894dcb09e8e369015ea5108de1fcccaf6b47ae9d9b43e1b973e21adcd06",
"0x463184f0d0add96737f23946520cd42ace6df2ab0f97191035d620631450bd9a",
"0x9cb9feb47282f553dc5daa6f252347b7219bfb9c76e44298b1430ce71bf31491",
"0x32ef0ec346d8e36c4270e874bd08e2c2394294838f4c9979bb8e6920544f991c",
"0x6c66fdfadb0e3c6c1122a460937d30b3c2e9626b251f20fe8f086be1317ec3b4",
"0xec45afb4a4f8c4d858a531c5f5ff439dfab96b22bff03ec9dc4f052bcbe3ba81",
"0x7ad2afb5ed0568baa04b9d310a6d8d06ff223997dcab9ee6f56488243815cea9",
"0x48834ddb69332746f749df91522c570aa944ee0cd52af23088c097cd5efec468"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


