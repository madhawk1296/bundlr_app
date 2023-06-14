import fetchCollectionsByUser from "./fetchCollectionsByUser";
import fetchTreasureCollections from "./fetchTreasureCollections";
import fetchTreasureListings from "./fetchTreasureListings";
import standardizeUser from "./standardizeUser";
import updateUserDB from "./updateUserDB";

export default async function updateUser(address) {
    const collections = await fetchTreasureCollections();
    const usercollections = await fetchCollectionsByUser(address);
    const listings = await fetchTreasureListings();
    const standardized = await standardizeUser(address, usercollections, collections, listings);
    await updateUserDB(standardized);
}