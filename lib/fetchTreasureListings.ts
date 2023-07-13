import {Promise} from "bluebird";

export default async function fetchTreasureListings() {
    const querySize = 300;

    const startingPositions = [];

    for(let i = 0; i < (5000); i += querySize) {
        startingPositions.push(i);
    }
    
    const allListings = await Promise.map(startingPositions, async (startingPosition) => {
        const query = `
            query {
                listings(first: ${querySize}, skip: ${startingPosition}, where: {status: ACTIVE} orderBy: timestamp orderDirection: desc) {
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
        
        const res = (await (await fetch(process.env.TREASURE_GRAPH_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        })).json());

        const listings = res.data.listings;
        return listings;
    });

    return allListings.flat();
}