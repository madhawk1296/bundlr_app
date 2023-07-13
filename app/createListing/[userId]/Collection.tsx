import Image from "next/image";
import Link from "next/link";
import formatNumber from "../../../lib/formatNumber";
import CurrencyImage from "../../../components/CurrencyImage";
import convertToCurrency from "../../../lib/convertToCurrency";
import formatUSD from "../../../lib/formatUSD";

export default function Collection({ userId, currencies, collection }) {
    const {imageUrl, name, floorPrices, address, totalCopiesOwned, treasureFloorPrice} = collection
    const floorPriceValue = convertToCurrency(currencies, treasureFloorPrice, "magic", "usd");

    return (
        <Link  href={`/createListing/${userId}/${address}`}>
            <div className='relative w-full md:w-[250px] rounded-xl overflow-hidden border-2 border-gray-100 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md'>                    
                <div className='relative w-full aspect-square'>
                    <Image alt={`Collection ${name}`} src={imageUrl ? imageUrl : '/no_image.jpeg'} width={250} height={250} priority={true} />     
                </div> 
                <div className='relative w-full h-fit px-[20px] py-[4px] flex flex-col'>
                    <h1 className='relative w-full h-[28px] font-semibold text-lg text-gray-800 tracking-wide overflow-hidden truncate'>{name}</h1>
                    <div className="relative w-full h-full flex items-center">
                        <div className="relative h-[20px] w-[20px] py-[1px]">
                            <CurrencyImage currency='magic' />
                        </div>
                        <h1 className='w-fit h-[28px] font-semibold text-xl text-gray-800 tracking-wide overflow-hidden truncate'>{formatNumber(treasureFloorPrice)}</h1>
                    </div>
                    <h1 className='relative w-full h-[20px] font-semibold text-sm text-gray-600 tracking-wide overflow-hidden truncate'>{formatUSD(floorPriceValue || 0)}</h1>
                    {totalCopiesOwned && <h1 className='font-semibold text-sm text-gray-600 tracking-wide pt-[3px]'><span className='font-medium'>Owned:</span> {totalCopiesOwned}</h1>}
                </div> 
            </div> 
        </Link>
    )
}