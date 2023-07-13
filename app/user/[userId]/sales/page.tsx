import fetchUserSales from "../../../../lib/fetchUserSales";
import Sale from "./Sale";

export default async function Page({ params }) {
    const { userId } = params;
    const sales = await fetchUserSales(userId);

    return (
        <div className="relative w-full md:min-h-[250px] grid md:flex items-center items-stretch grid-cols-2 md:flex-wrap gap-2 md:gap-5 px-[15px] md:px-[40px]">
            {sales && sales.map((listing, index) => <Sale key={index} userId={userId} bundle={listing} />)}
        </div>
    )
}