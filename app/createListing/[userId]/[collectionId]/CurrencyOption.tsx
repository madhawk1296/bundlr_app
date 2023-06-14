import Image from "next/image";
import Magic from "../../../../components/icons/Magic";
import CurrencyImage from "../../../../components/CurrencyImage";

export default function CurrencyOption({ currency, selectCurrency }) {
    const handleClick = () => {
        selectCurrency(currency);
    }

    return (
        <div onClick={handleClick} className="relative w-full h-[40px] px-[15px] py-[10px] flex gap-2 items-center transition-all duration-200 cursor-pointer hover:bg-gray-100">
            <div className="relative min-w-[20px] h-full flex justify-center">
                <CurrencyImage currency={currency.name} />
            </div>
            <h1 className="text-sm font-bold text-gray-700">{currency.title}</h1>
        </div>
    )
}