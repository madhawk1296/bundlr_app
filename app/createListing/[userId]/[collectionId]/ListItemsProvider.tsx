'use client';

import { useState } from "react";
import ListItemsContext from "../../../../components/hooks/ListItemsContext";
import getCurrencyInfo from "../../../../lib/getCurrencyInfo";

export default function ListItemsProvider({ children }) {
    const magicInfo = getCurrencyInfo("magic");

    const [currency, setCurrency] = useState(magicInfo);
    const [selectedItems, setSelectedItems] = useState([]);

    const selectCurrency = (currency) => {
        setCurrency(currency);
    }

    const selectItem = (item) => {
        setSelectedItems(selectedItems.concat(item))
    }

    const deselectItem = (tokenId) => {
        setSelectedItems(selectedItems.filter((currentItem) => currentItem.tokenId != tokenId))
    }

    const updateItem = (item) => {
        setSelectedItems(selectedItems.map((currentItem) => {
            if(currentItem.tokenId == item.tokenId) {
                return item
            } else {
                return currentItem
            }
        }))
    }

    return (
        <ListItemsContext.Provider value={{ currency, selectCurrency, selectedItems, selectItem, deselectItem, updateItem}}>
            {children}
        </ListItemsContext.Provider>
    )
}