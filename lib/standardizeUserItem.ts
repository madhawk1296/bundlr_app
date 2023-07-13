import getTokenFloorPrice from "./getTokenFloorPrice";

export default function standardizeUserItem(collection, userItem, tokenListings) {
    const { contract_address, token_id, name, description, image_url, external_url, created_date, status, contract, token_count } = userItem;
    const tokenStandard = contract?.type;

    const tokenFloorPrice = getTokenFloorPrice(tokenStandard, tokenListings);

    return {
        collection,
        tokenId: token_id,
        name,
        description,
        imageUrl: image_url,
        externalUrl: external_url,
        createdDate: created_date,
        status,
        tokenStandard,
        balance: token_count,
        tokenFloorPrice
    }
}