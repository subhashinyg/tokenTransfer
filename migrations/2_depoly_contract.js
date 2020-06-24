const fs = require('fs');
const Owned = artifacts.require('./Owned.sol');
const Owned = artifacts.require('./Token.sol');

module.exports = function(deployer){
  deployer
  .deploy(Token)
  .then(() => console.log(Token.address))
  .then(() => Token.deployed())
  .then((_instance) => {
    console.log(_instance);
    const Token = {
      address: _instance.address,
    };
    const jsonString = JSON.stringify(Token);
      fs.writeFile('./blockChainconfig.json', jsonString, (err) => {
        if (err) {
          console.log('Error writing file', err);
        } else {
          console.log('Successfully wrote file');
        }
      });
  })
};

// module.exports = function(deployer){
//     deployer
//     .deploy(Owned)
//     .then(() => console.log(Owned.address))
//     .then(() => Owned.deployed())
//     .then((_instance) => {
//       console.log(_instance);
//       const Owned = {
//         address: _instance.address,
//       };
//       const jsonString = JSON.stringify(Owned);
//       fs.writeFile('./blockChainconfig.json', jsonString, (err) => {
//         if (err) {
//           console.log('Error writing file', err);
//         } else {
//           console.log('Successfully wrote file');
//         }
//       });
//     });
// };
