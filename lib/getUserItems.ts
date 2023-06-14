import clientPromise from "./mongodb";

export default async function getUserItems(address, collection) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    return await db.collection('userItems').findOne({ _id: `${address}.${collection}` });
}