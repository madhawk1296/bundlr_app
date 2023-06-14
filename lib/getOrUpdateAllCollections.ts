import getAllCollections from "./getAllCollections";
import updateCollections from "./updateCollections";

export default async function getOrUpdateAllCollections() {
    const collections = await getAllCollections();

    // if user exists, return user collections, else update user and return user collections
    if(collections?.length > 0) {
        updateCollections();
        return collections;
    } else {
        await updateCollections();
        return await getAllCollections();
    }
}