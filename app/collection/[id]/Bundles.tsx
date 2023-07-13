import getListings from "../../../lib/getListings";
import Bundle from "./Bundle";

export default async function Bundles({ collectionId }) {
    const collection = await getListings(collectionId);
    const { tokenStandard, listings } = collection || {};

    return (
        <div className="relative w-full min-h-[250px] grid grid-cols-2 md:flex items-center items-stretch md:flex-wrap gap-2 md:gap-5 ">
            {listings && listings.map((listing, index) => <Bundle collectionId={collectionId} key={index} bundle={listing} tokenStandard={tokenStandard} />)}
        </div>
    )
}