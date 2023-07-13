import { Promise } from 'bluebird';
import fetchRoyalty from './fetchRoyalty';

export default async function fetchRoyalties(selectedItems, contract) {
    return await Promise.map(selectedItems, async (item) => {
        return await fetchRoyalty(item, contract);
    });        
}