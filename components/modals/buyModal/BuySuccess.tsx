import Image from "next/image";
import getImage from "../../../lib/getImage";

export default function BuySuccess({ menuOpen, closeMenu, collection }) {
    return (
        <div className={`relative bg-white rounded-t-xl md:rounded-xl w-[500px] max-h-[700px] relative flex flex-col gap-2 py-[20px] px-[20px] overflow-scroll ${!menuOpen && "opacity-0"}`}>
            <button onClick={closeMenu} className="flex self-end font-bold h-[35px] aspect-square border-2 border-gray-200 text-gray-600 rounded-full justify-center items-center leading-none">X
            </button>
            <div className="relative w-full flex flex-col gap-6 items-center">
                <div className="relative w-full flex flex-col gap-2 items-center">
                    <Image className="rounded-xl overflow-hidden" alt="Collection Image" src={getImage(collection?.imageUrl)} width={200} height={200} />
                    <h1 className="text-xl font-semibold text-gray-800">{collection?.name}</h1>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">You have purchased this bundle!</h1>
            </div>
        </div>
    )
}