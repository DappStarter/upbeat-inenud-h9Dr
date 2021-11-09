require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift regret ridge punch install canoe army gesture'; 
let testAccounts = [
"0xe3e4bbd01b6ac2b0ce8fa9dce12995bd9164915fa936802ae0218f780a1d425d",
"0x9fca0f71839e6e7d93ab08568b939282958d5696558d5fcad96e132561cef0ba",
"0x0b0b78d24dd1edd29679f267a50d471e21ed19efe60f94a5bf9e67e222c6f3a3",
"0x2353f9ab2ec6cebeb55f7b7036beb33aa8fb6f85bce13c72fa53a6eba6a43d15",
"0x4d9eeeabe21d531ea53679e910b7aa96121a595a4468818e76c175bf5899afdc",
"0x366dad03a20b372bd2ef098e9b876f22ad0f14a20b75f1114ac604786324db50",
"0xb155906e42bb1b5e64089faa0ae480a9019a4766df0e0df9ff673856ead92213",
"0x88f8c68b24200e50657712e03b6e2c0f1acd108af0c8ab69547044e902f7e622",
"0xbe49c4d212b5d409a9af911f705c2adf18be95f52ad33d370f40dc25bbc894eb",
"0x7df4d061b8b9919a52d2140cccf233898f6b1af719f63da47c2cf716915a7e82"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

