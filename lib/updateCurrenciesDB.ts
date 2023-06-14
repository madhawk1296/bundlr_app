import clientPromise from "./mongodb";

export default async function updateCurrenciesDB(currencies) {
    const client = await clientPromise();

    const db = client.db(process.env.MONGODB_DB);

    const bulkOps = currencies.map(currency => ({
        updateOne: {
            filter: { _id: currency.address },
            update: { $set: currency },
            upsert: true,
        },
    }));

    await db.collection('currencies').bulkWrite(bulkOps);
}