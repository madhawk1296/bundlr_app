import useHover from "../../../components/hooks/useHover"

export default function Tab({ value, title, active, setActiveTab }) {
    const [hoverRef, isHovered]: any[] = useHover();
    const handleClick = () => {
        setActiveTab(value);
    }

    return (
        <div ref={hoverRef} onClick={handleClick} className={`relative h-full flex items-center cursor-pointer border-b-2 transition-all duration-200 ${active ? "border-gray-700" : "border-transparent hover:border-gray-500"}`}>
            <h1 className={`text-lg font-bold transition-all duration-200 ${active ? "text-gray-700" : isHovered ? "text-gray-500" : "text-gray-400"}`}>{title}</h1>
        </div>
    )
}