const Utils = require('web3-utils');
const Contract = require('web3-eth-contract');
const fs = require('fs');

const address = process.argv[2] ? process.argv[2] : '0x41318419cfa25396b47a94896ffa2c77c6434040';

const dateOptions = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC'};

(async () => {
    Contract.setProvider(process.env.URI ? process.env.URI : 'http://localhost:8545');

    const proxyAddress = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'; // proxy contract
    const contractAddress = '0x47ebab13b806773ec2a2d16873e2df770d130b50'; // delegated contract
    const jsonInterface = JSON.parse(fs.readFileSync('./' + contractAddress + '.json', {encoding:'utf8', flag:'r'}));

    const contract = new Contract(jsonInterface, proxyAddress);

    const totalPooledEther = Utils.fromWei(await contract.methods.getTotalPooledEther().call());
    const totalShares = Utils.fromWei(await contract.methods.getTotalShares().call());

    const balance = Utils.fromWei(await contract.methods.balanceOf(address).call());
    const shares = Utils.fromWei(await contract.methods.sharesOf(address).call());

    console.log('"' + new Date().toLocaleDateString('en-US', dateOptions) + '",balance,' + balance + ',shares,' + shares + ',totalPooledEther,' + totalPooledEther + ',totalShares,' + totalShares);

})();
