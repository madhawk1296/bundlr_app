import CurrencyImage from "../../../../components/CurrencyImage";

export default function SummaryItem({ currency, item }) {
    const isERC1155 = item.tokenStandard == 'ERC1155';

    return (
        <div className="min-w-0 w-full flex flex-col">
            <div className="w-full overflow-hidden flex justify-between items-center">
                <h1 className="truncate max-w-[167px] h-[24px] font-semibold text-md text-gray-800 tracking-wide">{item.name}</h1>
                <div className="relative min-w-[75px] h-[16px] font-semibold text-md text-gray-800 tracking-wide overflow-hidden truncate text-right flex flex-inline gap-1 justify-end items-center">
                    <CurrencyImage currency={currency.name} />
                    {item.price}
                </div>
            </div>
            <div className="w-full overflow-hidden flex justify-between items-center">
                <h1 className="truncate max-w-[167px] h-[24px] font-medium text-sm text-gray-600 tracking-wide">{isERC1155 ? "Quantity" : `#${item.tokenId}`}</h1>
                <h1 className="truncate max-w-[167px] h-[24px] font-medium text-sm text-gray-600 tracking-wide">{isERC1155 && item.quantity}</h1>
            </div>
        </div>
    )
}