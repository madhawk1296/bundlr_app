import currencyABI from '../data/abi/currencyABI';
import createContractInstance from './createContractInstance';

export default function createCurrencyContractInstance(currencyId) {
    const abi = currencyABI();    
    return createContractInstance(abi, currencyId);
}