import clientPromise from "./mongodb";

export default async function updateUserItemsDB(userItems) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection('userItems').updateOne(
        { _id: userItems._id },
        { $set: userItems },
        { upsert: true }
    );
}