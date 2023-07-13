import { usePrepareContractWrite } from "wagmi";
import fromEtherToWei from "./fromEtherToWei";
import magicABI from "../data/abi/magicABI";

export default function prepareApproveMarketplaceCurrency(address, total) {
    const abi = magicABI();

    const { config } = usePrepareContractWrite({
        address: address,
        abi,
        functionName: 'approve',
        args: [process.env.NEXT_PUBLIC_BUNDLR_ADDRESS, fromEtherToWei(total || 0)],
    })

    return config;
}