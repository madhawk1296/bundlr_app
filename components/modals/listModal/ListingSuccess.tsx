import Image from "next/image";
import getImage from "../../../lib/getImage";

export default function ListingSuccess({ menuOpen, closeMenu, collection }) {
    return (
        <div className={`relative bg-white rounded-t-xl md:rounded-xl w-[500px] max-h-[700px] relative flex flex-col gap-2 py-[20px] px-[20px] overflow-scroll ${!menuOpen && "opacity-0"}`}>
            <button onClick={closeMenu} className="flex self-end font-bold h-[35px] aspect-square border-2 border-gray-200 text-gray-600 rounded-full justify-center items-center leading-none">X
            </button>
            <div className="relative w-full flex flex-col gap-6 items-center">
                <div className="relative w-full flex flex-col gap-2 items-center">
                    <Image className="rounded-xl overflow-hidden" alt="Collection Image" src={getImage(collection?.imageUrl)} width={200} height={200} />
                    <h1 className="text-xl font-semibold text-gray-800">{collection?.name}</h1>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Your items have been listed!</h1>
                <button className="w-full bg-blue-500 rounded-xl overflow-hidden text-white px-[15px] py-[10px] font-medium text-lg smooth shadow-sm hover:shadow" >View listing</button>
            </div>
        </div>
    )
}