import createRoyaltyContractInstance from './createRoyaltyContractInstance';
import fetchRoyalties from './fetchRoyalties';

export default async function gatherRoyalties(collectionId, selectedItems) {
    const contract = await createRoyaltyContractInstance(collectionId);
    const supportsERC2981 = await contract.supportsInterface('0x2a55205a');

    if (supportsERC2981) {
        return await fetchRoyalties(selectedItems, contract);       
    } else {
        return selectedItems.map(item => ({recipient: null, amount: 0}))
    }
}