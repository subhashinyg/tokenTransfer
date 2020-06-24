const Web3 = require('web3'),
  express = require('express'),
  bodyparser = require('body-parser'),
  fs = require('fs'),
  cors = require('cors');

var account;
var Token;
const ContractAddress = require('./blockChainconfig.json').address;

// MiddleWare
app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
}

//server setup

let content = JSON.parse(
  fs.readFileSync('./build/contracts/Token.json', 'utf8')
);
async function web3Setup() {
 // await setAccount();
  Owned = await new web3.eth.Contract(content.abi, ContractAddress);
  console.log('Web3 Connected');
  console.log(ContractAddress);
}
web3Setup();

app.get('/', () => {
    Token.methods
      .transfer('0x987FaeD6F3ac6A77675Dd7912B591Bf6ee551eF9', 1)
      .call({ from: account })
      .then((result) => {
        console.log(result);
        console.log('document added');
      })
      .catch((err) => {
        console.log(err);
      });
  
});
const port = 8000;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
