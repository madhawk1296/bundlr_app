import CurrencyImage from "../../CurrencyImage";

export default function Detail({ title, value, currency }) {
    return (
        <div className="relative w-full flex justify-between items-center">
            <h1 className="text-sm font-medium text-gray-600">{title}</h1>
            <div className="relative h-[16px] flex items-center gap-1">
                <CurrencyImage currency={currency.name} />
                <h1 className="text-sm font-semibold text-gray-600">{value}</h1>
            </div>
        </div>
    )
}