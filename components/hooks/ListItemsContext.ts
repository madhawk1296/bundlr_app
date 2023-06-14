import { createContext } from "react";
import getCurrencyInfo from "../../lib/getCurrencyInfo";

const selectCurrencyPlaceholder = ({
    name,
    address,
    title
}) => {}

const selectItemPlaceholder = ({
    name,
    tokenId,
    quantity,
    price,
    tokenStandard
}) => {}

const deselectItemPlaceholder = (tokenId) => {}

const updateItemPlaceholder = ({
    name,
    tokenId,
    quantity,
    price,
    tokenStandard
}) => {}

export default createContext({ 
    currency: getCurrencyInfo("magic"), 
    selectCurrency: selectCurrencyPlaceholder, 
    selectedItems: [], 
    selectItem: selectItemPlaceholder, 
    deselectItem: deselectItemPlaceholder, 
    updateItem: updateItemPlaceholder
});
