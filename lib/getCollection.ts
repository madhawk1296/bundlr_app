import clientPromise from "./mongodb";

export default async function getCollection(collection) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    return await db.collection('collections').findOne({ _id: collection });
}