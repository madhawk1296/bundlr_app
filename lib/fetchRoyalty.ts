import { ethers } from "ethers";
import fromWeiToEther from "./fromWeiToEther";

export default async function fetchRoyalty(item, contract) {
    const { tokenId, price, quantity } = item;

    const royaltyData = await contract.royaltyInfo(tokenId, ethers.parseEther(price.toString()));   
    const [royaltyRecipient, royaltyAmount] = royaltyData;

    return {
        recipient: royaltyRecipient,
        amount: fromWeiToEther(royaltyAmount)
    }
}