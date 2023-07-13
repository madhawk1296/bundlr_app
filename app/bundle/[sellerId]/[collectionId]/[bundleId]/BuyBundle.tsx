'use client';

import { useContext } from "react";
import BuyModalContext from "../../../../../components/hooks/BuyModalContext";

export default function BuyBundle({ collection, bundle }) {
    const { openMenu, updateBundle } = useContext(BuyModalContext);

    const handleBuy = () => {
        updateBundle(collection, bundle); 
        openMenu();
    }
    
    return (
        <button onClick={handleBuy} className="w-fit px-[15px] py-[10px] rounded-lg bg-blue-400 text-white text-md font-medium shadow-sm smooth hover:shadow">Buy Bundle</button>
    )
}