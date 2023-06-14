import {Promise} from "bluebird";
import fetchBatchCollections from "./fetchBatchCollections";

export default async function fetchMultipleBatchCollections(batches) {
    return await Promise.reduce(batches, async (collections, batch) => {
        const batchCollections = await fetchBatchCollections(batch);
        return collections.concat(batchCollections);
    }, []);


}