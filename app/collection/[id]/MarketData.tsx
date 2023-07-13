import CurrencyImage from "../../../components/CurrencyImage";

export default function MarketData({ title, value, currency=false }) {
    return (
        <div className="relative md:min-w-[140px] py-[10px] px-[15px] flex flex-col gap-1 items-center border-2 border-gray-200 rounded-xl">
            <h1 className="font-medium text-sm text-gray-600">{title}</h1>
            <div className="relative h-[19px] flex gap-1 items-center">
                {currency && <CurrencyImage currency="magic" />}
                <h1 className="font-bold text-sm md:text-xl text-gray-700">{value}</h1>
            </div>
        </div>
    )
}