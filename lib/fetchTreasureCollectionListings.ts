import {Promise} from "bluebird";

export default async function fetchTreasureCollectionListings(address) {
    const url = "https://api.thegraph.com/subgraphs/name/vinnytreasure/treasuremarketplace-fast-prod"
    const querySize = 300;
    const currentItem = Math.floor(Date.now() / 1000);
    
    const query = `
        query {
            listings(first: ${querySize}, where: {collection_: {id: "${address}"} status: ACTIVE expiresAt_gt: ${currentItem}} orderBy: pricePerItem orderDirection: asc) {
                pricePerItem
                token {
                    tokenId
                }
                collection {
                    id 
                }
            }
        }
        `;
        
    const res = (await (await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    })).json());

    return res.data.listings;
}