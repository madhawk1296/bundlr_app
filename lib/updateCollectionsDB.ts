import clientPromise from "./mongodb";

export default async function updateCollectionsDB(collections) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    const bulkOps = collections.map(collection => ({
        updateOne: {
            filter: { _id: collection.address }, // replace 'id' with your actual unique identifier field
            update: { $set: collection },
            upsert: true,
        },
    }));

    await db.collection('collections').bulkWrite(bulkOps);
}