import fromWeiToEther from "./fromWeiToEther";

export default function getTokenFloorPrice(tokenStandard, tokenListings) {
    return tokenStandard === "ERC1155" ? fromWeiToEther(tokenListings.sort((a, b) => a.pricePerItem - b.pricePerItem)[0]?.pricePerItem || 0) : 0
}