import Image from "next/image";
import Social from "./Social";
import getArbiscan from "../../../lib/getArbiscan";
import Description from "./Description";
import Metadata from "./Metadata";
import condenseNumber from "../../../lib/condenseNumber";
import prepareCategory from "../../../lib/prepareCategory";
import MarketData from "./MarketData";
import Tabs from "./Tabs";
import getOrUpdateCollection from "../../../lib/getOrUpdateCollection";
import getImage from "../../../lib/getImage";
import Bundles from "./Bundles";

export default async function Collection({ params }) {
    const { id } = params;

    const collection = await getOrUpdateCollection(id);

    const { name, imageUrl, bannerImageUrl, description, externalUrl, twitterUsername, discordUrl, instagramUrl, totalQuantity, category, distinctOwnerCount, marketCap, treasureFloorPrice, volumes } = collection;
    const chain = "Arbitrum";
    const volume = volumes?.[0]?.volume || 0;

    return (
        <div className="relative w-full flex flex-col gap-4 pb-[40px]">
            <div className="relative w-full md:h-[360px]">
                <div className="w-full h-[180px] bg-gray-300">
                    {bannerImageUrl && <Image alt="Collection Banner" src={bannerImageUrl} fill={true} sizes="100vw" />}
                </div>
                <div className="absolute bottom-0 w-full h-[40px] bg-white flex justify-start">
                    <div className="absolute left-[40px] bottom-[0px] h-[100px] md:h-[170px] aspect-square bg-white border-4 border-gray-100 rounded-xl overflow-hidden">
                        <Image alt="Collection Profile" src={getImage(imageUrl)} height={170} width={170} />
                    </div>
                </div>
            </div>
            <div className="relative w-full flex flex-col gap-4 md:gap-0 md:flex-row px-[15px] md:px-[40px] justify-evenly">
                <div className="relative w-full flex flex-col gap-4">
                    <h1 className="w-full text-xl md:text-3xl font-bold text-gray-800 tracking-wide overflow-hidden text-overflow-ellipsis whitespace-nowrap">{name}</h1>
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
                    <div className="relative w-full flex gap-6 justify-center md:justify-end items-center">
                        <Social url={getArbiscan(id)} type="arbitrum" />
                        {externalUrl && <Social url={externalUrl} type="website" />}
                        {twitterUsername && <Social url={`https://twitter.com/${twitterUsername}`} type="twitter" />}
                        {discordUrl && <Social url={discordUrl} type="discord" />}
                        {instagramUrl && <Social url={instagramUrl} type="instagram" />}
                    </div>
                    <div className="w-full h-[100px] flex gap-2 md:gap-8 justify-center md:justify-end items-center">
                        <MarketData title="Floor Price" value={treasureFloorPrice} currency={true} />
                        <MarketData title="Volume" value={condenseNumber(volume)} currency={true} />
                        <MarketData title="Owners" value={distinctOwnerCount} />
                    </div>
                </div>
            </div>
            <div className="relative w-full px- md:px-[40px] flex flex-col gap-5">
                <Tabs />
                <Bundles collectionId={id} />
            </div>
        </div>
    )
}