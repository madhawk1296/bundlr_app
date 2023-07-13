export default function Bundle721({ items }) {
    return (
        <div className="w-full flex flex gap-2">
            {items.map((item, index) => {
                return (
                    <h1 className="bg-gray-200 rounded-md px-[10px] py-[5px] text-xs font-semibold text-gray-700">#{item.tokenId}</h1>
                )
            })}
        </div>
    )
}