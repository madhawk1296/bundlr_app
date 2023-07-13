import { useContractWrite } from "wagmi";
import prepareApproveMarketplaceCurrency from "./prepareApproveMarketplaceCurrency";

export default function approveMarketplaceCurrency(currencyId, total) {
    const config = prepareApproveMarketplaceCurrency(currencyId, total);
    const res = useContractWrite(config);
    return res.write; 
}