export default function SortOption({ option, onSelect }) {
    const handleClick = () => {
        onSelect(option);
    }

    return (
        <div onClick={handleClick} className="relative w-full h-[40px] px-[15px] py-[10px] flex justify-center transition-all duration-200 cursor-pointer hover:bg-gray-100">
            <h1 className="text-sm font-semibold text-gray-700">{option.title}</h1>
        </div>    
    )
}