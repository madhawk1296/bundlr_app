import fetchCollections from "./fetchCollections";
import gatherTreasureCollections from "./gatherTreasureCollections";
import updateCollectionsDB from "./updateCollectionsDB";

export default async function updateCollections() {
    // gather all treasure collections
    const treasureCollections = await gatherTreasureCollections();

    // update mongo
    await updateCollectionsDB(treasureCollections);
}