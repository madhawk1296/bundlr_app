import fetchCollectionItemsByUser from "./fetchCollectionItemsByUser";
import fetchTreasureCollectionListings from "./fetchTreasureCollectionListings";
import standardizeUserItems from "./standardizeUserItems";

export default async function gatherCollectionItemsByUser(userId, collectionId) {
    const fetchItems = fetchCollectionItemsByUser(userId, collectionId);
    const fetchListings = fetchTreasureCollectionListings(collectionId);

    const [items, listings] = await Promise.all([fetchItems, fetchListings]);

    return standardizeUserItems(userId, collectionId, items, listings);
}