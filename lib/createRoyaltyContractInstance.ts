import royaltyABI from '../data/abi/royaltyABI';
import createContractInstance from './createContractInstance';

export default function createRoyaltyContractInstance(collectionId) {
    const abi = royaltyABI();
    return createContractInstance(abi, collectionId);
}