'use client';

import UpDown from "../../../../components/icons/UpDown";
import CurrencyOption from "./CurrencyOption";
import { useContext, useRef, useState } from "react";
import CurrencyImage from "../../../../components/CurrencyImage";
import currenciesData from "../../../../data/currencies";
import clickOutside from "../../../../components/hooks/clickOutside";
import ListItemsContext from "../../../../components/hooks/ListItemsContext";

export default function Currency() {
    const { currency, selectCurrency } = useContext(ListItemsContext);
    const [currencyMenu, setCurrencyMenu] = useState(false)
    const menuRef = useRef(null);

    const handleSelectCurrency = (currency) => {
        selectCurrency(currency);
        handleCloseMenu();
    }

    const handleOpenMenu = () => {
        setCurrencyMenu(true);
    }

    const handleCloseMenu = () => {
        setCurrencyMenu(false);
    }

    // Close menu when clicking outside
    clickOutside(menuRef, currencyMenu, handleCloseMenu);

    return (
        <div className="relative">
            <div onClick={handleOpenMenu} className="relative flex items-center gap-3" >
                <h1 className="text-sm font-bold text-gray-700">Currency</h1>
                <div className="relative h-[35px] px-[10px] flex gap-3 justify-center items-center border-2 border-gray-200 rounded-lg cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-sm hover:bg-gray-50">
                    <div className="relative h-full min-w-[20px] flex justify-center py-[6px]">
                        <CurrencyImage currency={currency.name} />
                    </div>
                    <div className="relative h-full py-[6px]">
                        <UpDown />
                    </div>
                </div>
            </div>
            <div ref={menuRef} className={`absolute w-[100px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden -right-[4px] top-[50%] -translate-y-[50%] translate-x-full z-20 flex flex-col transition-all duration-100 ${currencyMenu ? "opacity-full" : "opacity-0 invisible"}`}>
                {currenciesData.map((currentCurrency, index) => <CurrencyOption key={index} currency={currentCurrency} selectCurrency={handleSelectCurrency} />)}
            </div>
        </div>
    )
}