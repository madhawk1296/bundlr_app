import fromWeiToEther from "./fromWeiToEther";
import clientPromise from "./mongodb";

export default async function fetchSmolBrainLegacyVolume() {
    const client = await clientPromise();
    const db = client.db(process.env.MONGODB_DB);
    const legacy = await db.collection("collections").findOne({ _id: "0x6325439389e0797ab35752b4f43a14c004f22a9c" });
    return legacy?.volumes[0]?.volume;

}