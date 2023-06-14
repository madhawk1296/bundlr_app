import Image from "next/image";
import Social from "./Social";
import getArbiscan from "../../../lib/getArbiscan";
import Description from "./Description";
import Metadata from "./Metadata";
import condenseNumber from "../../../lib/condenseNumber";
import prepareCategory from "../../../lib/prepareCategory";
import MarketData from "./MarketData";
import Tabs from "./Tabs";
import Link from "next/link";
import getOrUpdateCollection from "../../../lib/getOrUpdateCollection";

export default async function Collection({ params }) {
    const { id } = params;

    
    const collection = await getOrUpdateCollection(id);

    const { name, imageUrl, bannerImageUrl, description, externalUrl, twitterUsername, discordUrl, instagramUrl, totalQuantity, category, floorPrices, distinctOwnerCount, marketCap, treasureFloorPrice, volumes } = collection;
    const chain = "Arbitrum";
    const floorPrice = floorPrices?.[0]?.value || 0;
    const volume = volumes?.[0]?.volume || 0;
    const marketCapValue = marketCap || 0;

    return (
        <div className="relative w-full flex flex-col gap-4">
            <div className="relative w-full h-[360px]">
                <div className="w-full h-full bg-gray-300">
                    {bannerImageUrl && <Image alt="Collection Banner" src={bannerImageUrl} fill={true} sizes="100vw" />}
                </div>
                <div className="absolute bottom-0 w-full h-[40px] bg-white flex justify-start">
                    <div className="absolute left-[40px] bottom-[0px] h-[170px] aspect-square bg-white border-4 border-gray-100 rounded-xl overflow-hidden">
                        <Image alt="Collection Profile" src={imageUrl} height={170} width={170} />
                    </div>
                </div>
            </div>
            <div className="relative w-full flex px-[40px] justify-evenly">
                <div className="relative w-full flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 tracking-wide">{name}</h1>
                    <div className="w-fit flex gap-4 items-center">
                        <Metadata subject="Items" value={condenseNumber(totalQuantity)} />
                        <div className="inline font-semibold">|</div>
                        <Metadata subject="Chain" value={chain} />
                        {category && (
                            <>
                                <div className="inline font-semibold">|</div>
                                <Metadata subject="Category" value={prepareCategory(category)} />
                            </>
                        )}
                    </div>
                    {description && <Description description={description} />}
                </div>
                <div className="relative w-full flex flex-col gap-6">
                    <div className="relative w-full flex gap-6 justify-end items-center">
                        <Social url={getArbiscan(id)} type="arbitrum" />
                        {externalUrl && <Social url={externalUrl} type="website" />}
                        {twitterUsername && <Social url={`https://twitter.com/${twitterUsername}`} type="twitter" />}
                        {discordUrl && <Social url={discordUrl} type="discord" />}
                        {instagramUrl && <Social url={instagramUrl} type="instagram" />}
                    </div>
                    <div className="w-full h-[100px] flex gap-8 justify-end items-center">
                        <MarketData title="Floor Price" value={treasureFloorPrice} currency={true} />
                        <MarketData title="Volume" value={condenseNumber(volume)} currency={true} />
                        <MarketData title="Owners" value={distinctOwnerCount} />
                    </div>
                </div>
            </div>
            <div className="relative w-full px-[40px] flex flex-col gap-5">
                <Tabs />
                <div className="relative w-full h-[250px] flex justify-center items-center flex-wrap gap-5">
                    <div className="flex flex-col gap-6 items-center">
                        <h1 className="font-semibold text-2xl text-gray-700">No active listings :(</h1>
                        <Link href="/createListing">
                            <button className='bg-[#22A2E3] text-white font-bold text-lg px-[15px] py-[10px] rounded-xl mx-auto hover:shadow-md'>Create a Listing</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}