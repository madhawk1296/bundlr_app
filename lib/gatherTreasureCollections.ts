import fetchTreasureCollections from "./fetchTreasureCollections";
import getBatchesOf from "./getBatchesOf";
import fetchMultipleBatchCollections from "./fetchMultipleBatchCollections";
import getAddressFromContracts from "./getAddressFromContracts";
import standardizeCollections from "./standardizeCollections";
import fetchTreasureListings from "./fetchTreasureListings";

export default async function gatherTreasureCollections() {
    const collections = await fetchTreasureCollections();
    const listings = await fetchTreasureListings();
    const batches = getBatchesOf(collections, 20);
    const batchCollections = await fetchMultipleBatchCollections(batches);

    return await standardizeCollections(batchCollections, collections, listings);
}