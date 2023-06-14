import getCollection from "./getCollection";
import getUserCollections from "./getUserCollections";
import updateCollection from "./updateCollection";
import updateUser from "./updateUser";

export default async function getOrUpdateCollection(address) {
    const collection = await getCollection(address);

    // if user exists, return user collections, else update user and return user collections
    if(collection) {
        updateCollection(address);
        return collection;
    } else {
        await updateCollection(address);
        return await getCollection(address);
    }
}