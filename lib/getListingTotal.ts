import fromWeiToEther from "./fromWeiToEther";

export default function getListingTotal(bundle) {
    return bundle.tokenIds.reduce((total, tokenId, index) => total + (Number(fromWeiToEther(bundle.prices[index])) * bundle.amounts[index]), 0);
}