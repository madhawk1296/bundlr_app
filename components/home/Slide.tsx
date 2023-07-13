'use client';

import fromWeiToEther from "../../lib/fromWeiToEther"
import Image from "next/image"
import Link from "next/link"
import formatNumber from "../../lib/formatNumber"
import CurrencyImage from "../CurrencyImage"
import getImage from "../../lib/getImage"
import { useContext } from "react";
import MobileContext from "../hooks/MobileContext";

export default function Slide({ index, collection }) {
    const { isMobile } = useContext(MobileContext);
    const { imageUrl, name, floorPrices, address, treasureFloorPrice } = collection


    return (
        <div className='relative w-[50vw] md:w-[25vw] h-full flex justify-center'>
            <Link href={`/collection/${address}`} className='relative w-[85%] aspect-[1/1] rounded-xl overflow-hidden border-2 border-gray-100 cursor-pointer hover:shadow-md'> 
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image alt={`Slide ${index}`} src={getImage(imageUrl)} fill={true} sizes={`${(isMobile ? 50 : 25) * .85}vw`} priority={true} />     
                </div> 
                <div className='absolute bottom-0 w-full h-[20%] bg-black opacity-[60%]'></div>
                <div className='absolute bottom-0 w-full h-[20%] px-[20px] pt-[4px] flex flex-col'>
                    <h1 className='relative w-full h-[28px] font-semibold text-base md:text-lg text-white tracking-wide overflow-hidden truncate'>{name}</h1>
                    <div className="hidden relative h-[28px] md:flex flex-inline gap-2 items-center">
                        <h1 className='font-medium text-sm text-gray-50 tracking-wide'>Floor Price:</h1>
                        <div className="relative h-full w-fit flex flex-inline gap-1 items-center py-[5px]">
                            <CurrencyImage currency="magic" />
                            <h1 className="font-medium text-sm text-gray-50 tracking-wide">{formatNumber(treasureFloorPrice)}</h1>
                        </div>
                    </div>
                </div> 
            </Link>
        </div>
    )
}