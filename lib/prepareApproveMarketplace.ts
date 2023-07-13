import { usePrepareContractWrite } from "wagmi";
import approvalABI from "../data/abi/approvalABI";

export default function prepareApproveMarketplace(address) {
    const abi = approvalABI();
    
    const { config } = usePrepareContractWrite({
        address,
        abi,
        functionName: 'setApprovalForAll',
        args: [process.env.NEXT_PUBLIC_BUNDLR_ADDRESS, true] as never,
    })

    return config;
}