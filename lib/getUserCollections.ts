import clientPromise from "./mongodb";

export default async function getUserCollections(address) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    return await db.collection('users').findOne({ _id: address });
}