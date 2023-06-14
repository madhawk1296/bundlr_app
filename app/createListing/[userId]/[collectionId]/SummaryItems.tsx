import Item from "../../../../components/listItems/Item";

export default function SummaryItems({ selectedItems, currency }) {
    const itemsExist = selectedItems.length > 0;

    return (
        <div className="w-full flex flex-col gap-4 overflow-hidden">
            {itemsExist ? selectedItems.map((item, index) => <Item key={index} currency={currency} item={item} />) : (
                <div className="w-full h-[48px] px-[20px] flex items-center justify-center">
                    <p className="text-gray-400 text-md">No items selected</p>
                </div>
            )}
        </div> 
    )
}