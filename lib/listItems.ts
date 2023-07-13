import { useContractWrite } from "wagmi";
import prepareListItems from "./prepareListItems";

export default function listItems(collectionId, selectedItems, currency, expires) {
    const config = prepareListItems(collectionId, selectedItems, currency, expires);
    return useContractWrite(config);
}