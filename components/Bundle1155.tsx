export default function Bundle1155({ items }) {
    return (
        <div className="w-full flex flex gap-2">
            {items.map((item, index) => {
                return (
                    <div className="bg-gray-200 rounded-md px-[10px] py-[5px] flex gap-4 items-center">    
                        <h1 className="text-xs font-semibold text-gray-700">#{item.tokenId}</h1>
                        <h1 className="text-xs font-semibold text-gray-700">x{item.amount}</h1>
                    </div>

                )
            })}
        </div>
    )
}