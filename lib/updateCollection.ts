import fetchCollection from "./fetchCollection";
import fetchCollectionMarketData from "./fetchCollectionMarketData";
import fetchTreasureCollection from "./fetchTreasureCollection";
import fetchTreasureCollectionListings from "./fetchTreasureCollectionListings";
import standardizeCollections from "./standardizeCollections";
import updateCollectionDB from "./updateCollectionDB";

export default async function updateCollection(address) {
    const collection = await fetchCollection(address);
    const treasureCollection = await fetchTreasureCollection(address) || null;
    const treasureListings = await fetchTreasureCollectionListings(address);

    const standardized = (await standardizeCollections([collection], [treasureCollection], treasureListings))[0];

    await updateCollectionDB(standardized);
}