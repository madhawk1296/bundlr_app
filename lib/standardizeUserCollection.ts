import checkIfSmolBrains from "./checkIfSmolBrainsCollection";
import fetchSmolBrainLegacyVolume from "./fetchSmolBrainLegacyVolume";
import fromWeiToEther from "./fromWeiToEther";
import getAddressFromContracts from "./getAddressFromContracts";

export default async function standardizeUserCollection(collection, treasureCollection, listings) {
    const { id, name, description, image_url, floor_prices, top_contracts, distinct_nfts_owned, total_copies_owned, distinct_owner_count, total_quantity } = collection;

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
        simpleHashId: id,
        address,
        name,
        tokenStandard,
        description,
        imageUrl: image_url,
        distinctNftsOwned: distinct_nfts_owned,
        totalCopiesOwned: total_copies_owned,
        floorPrices: floor_prices,
        distinctOwnerCount: distinct_owner_count,
        totalQuantity: total_quantity,
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