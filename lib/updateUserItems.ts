import gatherCollectionItemsByUser from "./gatherCollectionItemsByUser";
import updateUserItemsDB from "./updateUserItemsDB";

export default async function updateUserItems(user, collection) {
    const userItems = await gatherCollectionItemsByUser(user, collection);
    await updateUserItemsDB(userItems);

}