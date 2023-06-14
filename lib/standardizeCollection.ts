import checkIfSmolBrains from "./checkIfSmolBrainsCollection";
import fetchSmolBrainLegacyVolume from "./fetchSmolBrainLegacyVolume";
import fromWeiToEther from "./fromWeiToEther";
import getAddressFromContracts from "./getAddressFromContracts";

export default async function standardizeCollection(collection, treasureCollection=null, listings=null) {
    const { collection_id, name, description, image_url, banner_image_url, category, is_nsfw, external_url, twitter_username, discord_url, instagram_url, medium_username, telegram_url, marketplace_pages, spam_score, floor_prices, top_contracts, distinct_owner_count, total_quantity, market_cap } = collection;

    const address = getAddressFromContracts(top_contracts);

    let tokenStandard, fee, volume, treasureFloorPrice = 0;
    if(treasureCollection) {
        ({ tokenStandard, fee, stat: { volume } } = treasureCollection);
        volume = Number(fromWeiToEther(volume));

        const floorPrice = listings.sort((a, b) => a.pricePerItem - b.pricePerItem)[0]?.pricePerItem || 0;

        treasureFloorPrice = Number(fromWeiToEther(floorPrice));

        volume += checkIfSmolBrains(address) ? await fetchSmolBrainLegacyVolume() : 0;
    }

    return {
        _id: address,
        simpleHashId: collection_id,
        address,
        name,
        tokenStandard,
        description,
        imageUrl: image_url,
        bannerImageUrl: banner_image_url,
        category,
        isNsfw: is_nsfw,
        externalUrl: external_url,
        twitterUsername: twitter_username,
        discordUrl: discord_url,
        instagramUrl: instagram_url,
        mediumUsername: medium_username,
        telegramUrl: telegram_url,
        marketplacePages: marketplace_pages,
        spamScore: spam_score,
        floorPrices: floor_prices,
        distinctOwnerCount: distinct_owner_count,
        totalQuantity: total_quantity,
        marketCap: market_cap,
        fee,
        volumes: volume ? ([
            {
                marketplaceId: 'treasure',
                marketplaceName: 'Treasure',
                volume: volume,
                timeframe: "all_time"
            }
        ]) : [],
        treasureFloorPrice
    }
}