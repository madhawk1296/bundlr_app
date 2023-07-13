'use client';

import { useContext } from "react";
import ListItemsContext from "../../../../components/hooks/ListItemsContext";
import SummaryItems from "./SummaryItems";
import ListModalContext from "../../../../components/hooks/ListModalContext";
import ListButton from "./ListButton";
import Total from "../../../../components/listItems/Total";

export default function Summary({ collection }) {
    const { currency, selectedItems } = useContext(ListItemsContext);
    const { openMenu, updateSelectedItems } = useContext(ListModalContext);

    const itemsExist = selectedItems.length > 0;
    const total = selectedItems.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);

    const handleList = () => { 
        updateSelectedItems(collection, selectedItems, currency);
        openMenu();
    }

    return (
        <div className="w-full md:w-[25%] h-fit flex flex-col items-center gap-2 border-2 border-gray-200 rounded-xl py-[10px] px-[15px]">
            <h1 className="w-full h-[38px] text-2xl font-bold text-gray-700 tracking-wide overflow-hidden truncate">Summary</h1>
            <SummaryItems selectedItems={selectedItems} currency={currency} />
            <Total total={total} currency={currency} />
            <ListButton itemsExist={itemsExist} handleList={handleList} total={total} />
        </div>
    )
}