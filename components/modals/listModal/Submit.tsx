import approveMarketplace from "../../../lib/approveMarketplace";
import listItems from "../../../lib/listItems";
import { useEffect } from "react";

export default function Submit({ collection, selectedItems, currency, expires, allowsMarketplace, listingSuccessful }) {
    const approve = approveMarketplace(collection?.address);
    const {write: list, isSuccess} = listItems(collection?.address, selectedItems, currency?.address, expires);

    const handleApproveMarketplace = () => {
        approve();
    }

    const handleListItems = () => {
        list()
    }

    useEffect(() => {
        isSuccess && listingSuccessful();
    }, [isSuccess])

    return (
        <div className="relative w-full py-[10px] flex justify-center">
            <button onClick={allowsMarketplace ? handleListItems : handleApproveMarketplace} className="py-[10px] px-[15px] rounded-xl bg-blue-500 text-white font-semibold" >{allowsMarketplace ? "Create Listing" : "Approve Marketplace"}</button>
        </div>
    )
}