import { usePrepareContractWrite } from "wagmi";
import bundlrABI from "../data/abi/bundlrABI";
import getBuyBundleArgs from "./getBuyBundleArgs";

export default function prepareBuyBundle(bundle) {
    const abi = bundlrABI();    
    const { config } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_BUNDLR_ADDRESS,
        abi,
        functionName: 'buyBundle',
        args: getBuyBundleArgs(bundle)
    })

    return config;
}