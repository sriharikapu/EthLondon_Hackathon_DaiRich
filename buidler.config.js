usePlugin("@nomiclabs/buidler-truffle5");
usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-etherscan");
usePlugin("buidler-typechain");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await web3.eth.getAccounts();

  for (const account of accounts) {
    console.log(account);
  }
});

const INFURA_API_KEY = "";
const ROPSTEN_PRIVATE_KEY = "";

module.exports = {
  defaultNetwork: "buidlerevm",
  networks: {
    rinkeby: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY]
    }
  },
  solc: {
    version: "0.6.2"
  }
};