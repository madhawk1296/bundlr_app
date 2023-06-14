import clientPromise from "./mongodb";

export default async function updateCollectionDB(collection) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    await db.collection('collections').updateOne(
        { _id: collection.address },
        { $set: collection },
        { upsert: true }
    );
}