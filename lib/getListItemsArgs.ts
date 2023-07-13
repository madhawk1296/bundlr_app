import exp from "constants";
import fromEtherToWei from "./fromEtherToWei";
import getExpirationFromDays from "./getExpirationFromDays";

export default function getListItemsArgs(collectionId, selectedItems, currency, expires) {
    const tokenIds = selectedItems.map((item) => Number(item.tokenId));
    const amounts = selectedItems.map((item) => Number(item.quantity));
    const prices = selectedItems.map((item) => fromEtherToWei(item.price));
    const expirationTime = getExpirationFromDays(expires);

    return [
        collectionId,
        tokenIds,
        amounts,
        currency,
        prices,
        expirationTime
    ]
}