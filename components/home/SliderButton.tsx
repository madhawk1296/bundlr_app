import Image from "next/image";
import Arrow from "../icons/Arrow";

export default function SliderButton({ onClick, facingLeft, hidden }) {
    return (
        <div onClick={onClick} className={`pointer-events-auto w-[50px] border-2 border-gray-400 aspect-square px-[5px] bg-white rounded-full flex items-center cursor-pointer transition-all duration-200 hover:shadow ${facingLeft ? "rotate-90" : "-rotate-90"} ${hidden && "opacity-0"}`}>
            <Arrow />
        </div>
    )
}