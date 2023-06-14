import Web3 from 'web3';
import {BigNumber} from 'bignumber.js';


export default function fromWeiToEther(wei) {
    const web3 = new Web3();
    let weiBN = new BigNumber(wei);
    return web3.utils.fromWei(weiBN.toFixed(), 'ether');
}
