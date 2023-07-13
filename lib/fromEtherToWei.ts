import Web3 from 'web3';

export default function fromEtherToWei(value) {
    const web3 = new Web3();
    return web3.utils.toWei(String(value), 'ether')
}