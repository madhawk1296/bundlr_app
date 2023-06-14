import fetchSmolBrainLegacyVolume from "./fetchSmolBrainLegacyVolume";
import fromWeiToEther from "./fromWeiToEther";
import getAddressFromContracts from "./getAddressFromContracts";
import standardizeCollection from "./standardizeCollection";

export default async function standardizeCollections(collections, treasureCollections=null, listings=null) {
    return  await Promise.all(collections.map(async collection => {
        const address = getAddressFromContracts(collection.top_contracts);

        const treasureCollection = treasureCollections.find(treasureCollection => treasureCollection && (treasureCollection.id == address));

        const collectionListings = listings.filter(listing => {            
            return listing.collection.id == address
        });

        return standardizeCollection(collection, treasureCollection, collectionListings);
    }))
}