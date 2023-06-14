import clientPromise from "./mongodb";

export default async function getAllCollections() {
    const client = await clientPromise();
    const db = client.db(process.env.MONGODB_DB);

    return await db.collection('collections').find().toArray();
}