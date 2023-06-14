import clientPromise from "./mongodb";

export default async function updateUserDB(user) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection('users').updateOne(
        { _id: user._id },
        { $set: user },
        { upsert: true }
    );
}