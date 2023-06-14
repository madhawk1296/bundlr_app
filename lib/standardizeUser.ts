import getAddressFromContracts from "./getAddressFromContracts";
import standardizeCollection from "./standardizeCollection";
import standardizeUserCollection from "./standardizeUserCollection";

export default async function standardizeUser(user, collections, treasureCollections=null, listings=null) {
    const standardCollections = await Promise.all(collections.map(async collection => {
        const address = getAddressFromContracts(collection.top_contracts);

        const treasureCollection = treasureCollections.find(treasureCollection => treasureCollection.id == address);

        const collectionListings = listings.filter(listing => listing.collection.id == address);

        return await standardizeUserCollection(collection, treasureCollection, collectionListings)
    }));

    return {
        _id: user,
        address: user,
        collections: standardCollections
    }
}