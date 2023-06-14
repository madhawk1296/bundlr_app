import fromWeiToEther from "../../lib/fromWeiToEther";
import Image from "next/image";
import Link from "next/link";
import formatNumber from "../../lib/formatNumber";
import CurrencyImage from "../CurrencyImage";
import RowDetail from "./RowDetail";

export default function TrendingRow({ collection }) {
    const {imageUrl, name, floorPrices, address, volumes, treasureFloorPrice} = collection
    const volume = volumes?.[0]?.volume || 0;
    
    return (
        <Link href={`/collection/${address}`}>
            <div className="relative w-full h-[80px] bg-gray-100 rounded-xl overflow-hidden flex justify-evenly items-center cursor-pointer transition-all duration-200 hover:shadow-sm hover:bg-gray-200">
                <div className="relative w-full min-w-[50%] h-full flex gap-4 items-center">
                    <div className="relative h-full aspect-square">
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                            <Image alt="Image" src={imageUrl} width={80} height={80}  />
                        </div>
                    </div>
                    <h1 className="font-semibold text-md text-gray-800 tracking-wide">{name}</h1>
                </div>
                <RowDetail value={formatNumber(treasureFloorPrice)} />
                <RowDetail value={formatNumber(volume)} />
            </div>
        </Link>
    )
}