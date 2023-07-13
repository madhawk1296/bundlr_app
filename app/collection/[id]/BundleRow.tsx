import CurrencyImage from "../../../components/CurrencyImage";

export default function BundleRow({ item, tokenStandard }) {
    const isERC1155 = tokenStandard === "ERC1155";
    const { tokenId, price, amount } = item;
    return (
        <div className="w-full flex items-center justify-between bg-gray-200 rounded-md px-[10px] py-[5px]">
            <h1 className="text-xs font-semibold text-gray-700">#{tokenId}</h1>
            {isERC1155 && (
                <h1 className="text-xs font-semibold text-gray-700">x{amount}</h1>
            )}
            <div className="flex gap-1 items-center h-[15px]">
                <CurrencyImage currency="magic" />
                <h1 className="text-xs font-semibold text-gray-700">{price}</h1>
            </div>
        </div>
    )
}