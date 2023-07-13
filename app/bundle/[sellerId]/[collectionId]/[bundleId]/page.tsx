import gatherTokens from "../../../../../lib/gatherTokens";
import getListing from "../../../../../lib/getListing";
import getListingItems from "../../../../../lib/getListingItems";
import getOrUpdateCollection from "../../../../../lib/getOrUpdateCollection";
import Info from "./Info";
import Images from "./Images";

export default async function Collection({ params }) {
    const { sellerId, collectionId, bundleId } = params;

    const collection = await getOrUpdateCollection("0xA7f1462e0EcdeEbDeE4FaF6681148Ca96Db78777");


    const bundle = await getListing(sellerId, collectionId, bundleId);
    const items = getListingItems(bundle);
    const tokens = await gatherTokens(collectionId, items);

    return (
        <div className="w-full md:h-[700px] px-[20px] py-[20px] flex flex-col-reverse md:flex-row">
            <Images tokens={tokens} />
            <Info collection={collection} bundle={bundle} />
        </div>
    )
}