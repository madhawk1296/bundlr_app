import approveMarketplaceCurrency from "../../../lib/approveMarketplaceCurrency";
import buyBundle from "../../../lib/buyBundle";
import { useEffect } from "react";

export default function Submit({ total, collection, bundle, allowsMarketplace, buySuccessful }) {
    const approve = approveMarketplaceCurrency(bundle?.paymentToken, total);
    const {write: list, isSuccess} = buyBundle(bundle);

    const handleApproveMarketplace = () => {
        approve();
    }

    const handleListItems = () => {
        list()
    }

    useEffect(() => {
        isSuccess && buySuccessful();
    }, [isSuccess])

    return (
        <div className="relative w-full py-[10px] flex justify-center">
            <button onClick={allowsMarketplace ? handleListItems : handleApproveMarketplace} className="py-[10px] px-[15px] rounded-xl bg-blue-500 text-white font-semibold" >{allowsMarketplace ? "Buy Bundle" : "Approve Marketplace"}</button>
        </div>
    )
}