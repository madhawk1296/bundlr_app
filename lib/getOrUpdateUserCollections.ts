import getUserCollections from "./getUserCollections";
import updateUser from "./updateUser";

export default async function getOrUpdateUserCollections(user) {
    const userCollections = await getUserCollections(user);

    // if user exists, return user collections, else update user and return user collections
    if(userCollections) {
        updateUser(user);
        return userCollections;
    } else {
        await updateUser(user);
        return await getUserCollections(user);
    }
}