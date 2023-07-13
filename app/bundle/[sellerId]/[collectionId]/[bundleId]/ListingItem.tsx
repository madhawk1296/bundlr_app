import CurrencyImage from "../../../../../components/CurrencyImage";

export default function ListingItem({ item }) {
    const { amount, price, tokenId } = item;

    return (
        <div className="w-full flex justify-between">
            <h1 className="w-[150px] text-center text-md font-semibold text-gray-800 tracking-wider">#{tokenId}</h1>
            <h1 className="w-[150px] text-center text-md font-semibold text-gray-800 tracking-wider">x{amount}</h1>
            <div className="relative w-[150px] h-[18px] flex gap-2 justify-center items-center">
                <CurrencyImage currency="magic" />
                <h1 className="text-md font-semibold text-gray-800 tracking-wider">{price}</h1>
            </div>
        </div>
    )
}