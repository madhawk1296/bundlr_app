import getUserItems from "./getUserItems";
import updateUserItems from "./updateUserItems";

export default async function getOrUpdateUserItems(user, collection) {
    const userItems = await getUserItems(user, collection);

    // if user items exists, return user Items, else update user and return user Items
    if(userItems) {
        updateUserItems(user, collection);
        return userItems;
    } else {
        await updateUserItems(user, collection);
        return await getUserItems(user, collection);
    }
}