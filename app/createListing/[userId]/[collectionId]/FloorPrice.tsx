'use client';

import { useContext } from "react";
import CurrencyImage from "../../../../components/CurrencyImage";
import ListItemsContext from "../../../../components/hooks/ListItemsContext";
import getCurrency from "../../../../lib/getCurrency";
import getCurrencyPrice from "../../../../lib/getCurrencyPrice";
import convertToCurrency from "../../../../lib/convertToCurrency";
import formatNumber from "../../../../lib/formatNumber";
import formatUSD from "../../../../lib/formatUSD";

export default function FloorPrice({ floorPrice, currencies }) {
    const { currency } = useContext(ListItemsContext);

    // floor price info
    const floorPriceValue = convertToCurrency(currencies, floorPrice, "magic", "usd")
    const floorPriceCurrency = convertToCurrency(currencies, floorPrice, "magic", currency.name)

    return (
        <div className="relative w-[200px] h-full flex justify-center items-center">
            <div className="w-full h-fit flex flex-col border-2 border-gray-200 rounded-xl px-[15px] py-[10px] items-center gap-2">
                <h1 className="font-medium text-sm text-gray-600">Floor Price</h1>
                <div className='relative w-full h-[20px] flex flex-inline items-center justify-center gap-1'>
                    <CurrencyImage currency={currency.name} />
                    <h1 className="font-bold text-xl text-gray-700">{formatNumber(floorPriceCurrency)}</h1>
                </div>
                <h1 className="font-medium text-sm text-gray-600">{formatUSD(floorPriceValue)}</h1>
            </div>
        </div>
    )
}