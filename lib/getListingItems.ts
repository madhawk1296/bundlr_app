import fromWeiToEther from "./fromWeiToEther";

export default function getListingItems(bundle): { tokenId: string, price: number, amount: number }[] {
    return bundle.tokenIds.map((tokenId, index) => {
        return {
            tokenId,
            price: Number(fromWeiToEther(bundle.prices[index])),
            amount: Number(bundle.amounts[index])
        }
    })
}