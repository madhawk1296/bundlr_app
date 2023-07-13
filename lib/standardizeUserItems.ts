import getAddressFromContracts from "./getAddressFromContracts";
import standardizeUserItem from "./standardizeUserItem";

export default function standardizeUserItems(user, collection, userItems, listings) {
    const standardItems = userItems.map(userItem => {
        const { token_id } = userItem;

        const tokenListings = listings.filter(listing => listing.token.tokenId == token_id)

        return standardizeUserItem(collection, userItem, tokenListings);
    })

    return {
        _id: `${user}.${collection}`,
        user,
        collection,
        items: standardItems
    }

}