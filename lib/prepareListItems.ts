import { usePrepareContractWrite } from "wagmi";
import getListItemsArgs from "./getListItemsArgs";
import bundlrABI from "../data/abi/bundlrABI";

export default function prepareListItems(collectionId, selectedItems, currency, expires) {
    const abi = bundlrABI();

    const { config } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_BUNDLR_ADDRESS,
        abi,
        functionName: 'createListing',
        args: getListItemsArgs(collectionId, selectedItems, currency, expires)
    })

    return config;
}