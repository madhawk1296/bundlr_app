import { useContractWrite } from "wagmi";
import prepareApproveMarketplace from "./prepareApproveMarketplace";

export default function approveMarketplace(collectionId) {
    const config = prepareApproveMarketplace(collectionId);
    return useContractWrite(config).write; 
}