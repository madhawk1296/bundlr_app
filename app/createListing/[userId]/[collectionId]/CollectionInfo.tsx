import Image from "next/image";
import Currency from "./Currency";
import FloorPrice from "./FloorPrice";
import getImage from "../../../../lib/getImage";

export default function CollectionInfo({ currencies, collection }) {
    const { treasureFloorPrice, imageUrl } = collection; 
    
    return (
        <div className="w-full md:w-fit md:min-h-[125px] border-2 border-gray-200 rounded-xl px-[15px] py-[10px] flex flex-col">
            <div className="w-full flex flex-col gap-6">
                <div className="w-full flex gap-10 justify-evenly">
                    <div className="relative flex flex-col gap-2">
                        <Image className='rounded-xl' alt='Collection Image' src={getImage(imageUrl)} width={100} height={100} />
                        <h1 className="text-2xl font-bold text-gray-700">{collection.name}</h1>
                    </div>
                    <FloorPrice floorPrice={treasureFloorPrice} currencies={currencies} />
                </div>
                <div className="w-full flex gap-2">
                    <Currency />
                </div>
            </div>
        </div>
    )
}