import clientPromise from "./mongodb";

export default async function getCurrencies() {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    return await db.collection('currencies').find().toArray();
}