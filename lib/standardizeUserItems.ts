import getAddressFromContracts from "./getAddressFromContracts";
import standardizeUserItem from "./standardizeUserItem";

export default function standardizeUserItems(user, collection, userItems, ownership, listings) {
    const standardItems = userItems.map(userItem => {
        const { token_id } = userItem;
        const balance = ownership.find(token => token.nft.tokenID == token_id).balance;

        const tokenListings = listings.filter(listing => listing.token.tokenId == token_id)

        return standardizeUserItem(collection, userItem, balance, tokenListings);
    })

    return {
        _id: `${user}.${collection}`,
        user,
        collection,
        items: standardItems
    }

}