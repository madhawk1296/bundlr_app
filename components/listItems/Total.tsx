import formatNumber from "../../lib/formatNumber";
import CurrencyImage from "../CurrencyImage";

export default function Total({ total, currency}) {
    return (
        <div className="relative w-full flex flex-col border-t-2 border-gray-200 py-[5px]">
            <div className="relative w-full flex justify-between">
                <h1 className="w-full font-semibold text-md text-gray-800 tracking-wide overflow-hidden truncate">Total</h1>
                <div className="relative h-[18px] flex flex-inline items-center gap-1">
                    <CurrencyImage currency={currency.name} />
                    <h1 className="realtive font-semibold text-md text-gray-800 tracking-wide overflow-hidden truncate">{formatNumber(total)}</h1>
                </div>
            </div>
        </div>
    )
}