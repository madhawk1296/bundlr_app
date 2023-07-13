import approvalABI from '../data/abi/approvalABI';
import createContractInstance from './createContractInstance';

export default function createAllowanceContractInstance(collectionId) {
    const abi = approvalABI();    
    return createContractInstance(abi, collectionId);
}