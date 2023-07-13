import fetchUserListing from "../../../../lib/fetchUserListing";
import Listing from "./Listing";

export default async function Page({ params }) {
    const { userId } = params;

    const listings = await fetchUserListing(userId);

    return (
        <div className="relative w-full md:min-h-[250px] grid md:flex items-center items-stretch grid-cols-2 md:flex-wrap gap-2 md:gap-5 px-[15px] md:px-[40px]">
            {listings && listings.map((listing, index) => <Listing key={index} userId={userId} bundle={listing} />)}
        </div>
    )
}