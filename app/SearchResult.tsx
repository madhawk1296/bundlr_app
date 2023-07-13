import Image from "next/image";
import CurrencyImage from "../components/CurrencyImage";
import formatNumber from "../lib/formatNumber";
import getImage from "../lib/getImage";
import Link from "next/link";

export default function SearchResult({ collection, handleSelect }) {
    const { name, treasureFloorPrice, imageUrl, address } = collection;

    return (
        <Link onClick={handleSelect} href={`/collection/${address}`}>
            <div className="bg-white w-full h-[60px] flex px-[10px] items-center justify-between gap-2 overflow-hidden">
                <div className="relative w-full flex gap-2 items-center">
                    <Image className="rounded-md" alt="Search Result" src={getImage(imageUrl)} width={50} height={50} />
                    <h1 className="font-semibold text-xs md:text-base text-gray-800 truncate">{name}</h1>
                </div>
                <div className="relative flex gap-1 items-center h-[14px] md:h-[16px] justify-end items-center">
                    <CurrencyImage currency="magic" />
                    <h1 className="text-xs md:text-base font-semibold text-gray-800">{formatNumber(treasureFloorPrice)}</h1>
                </div>
            </div>
        </Link>
    )
}