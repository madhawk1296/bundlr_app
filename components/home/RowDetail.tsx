import formatNumber from "../../lib/formatNumber";
import fromWeiToEther from "../../lib/fromWeiToEther";
import CurrencyImage from "../CurrencyImage";

export default function RowDetail({ value }) {
    return (
        <div className="relative w-full flex items-center justify-center gap-1 h-[24px] py-[2px]">
            <CurrencyImage currency="magic" />
            <h1 className="font-semibold text-md text-gray-800 tracking-wide">{value}</h1>
        </div>
    )
}