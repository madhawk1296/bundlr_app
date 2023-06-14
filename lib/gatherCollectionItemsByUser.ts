import fetchCollectionItemsByUser from "./fetchCollectionItemsByUser";
import fetchCollectionOwnershipByUser from "./fetchCollectionOwnershipByUser";
import fetchTreasureCollectionListings from "./fetchTreasureCollectionListings";
import standardizeUserItems from "./standardizeUserItems";

export default async function gatherCollectionItemsByUser(userId, collectionId) {
    const fetchItems = fetchCollectionItemsByUser(userId, collectionId);
    const fetchOwnership = fetchCollectionOwnershipByUser(userId, collectionId);
    const fetchListings = fetchTreasureCollectionListings(collectionId);

    const [items, ownership, listings] = await Promise.all([fetchItems, fetchOwnership, fetchListings]);

    return standardizeUserItems(userId, collectionId, items, ownership, listings);
}