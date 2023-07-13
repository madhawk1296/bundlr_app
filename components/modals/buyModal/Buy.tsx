
import getCurrencyInfo from "../../../lib/getCurrencyInfo";
import getListingTotal from "../../../lib/getListingTotal";
import ifAllowsMarketplace from "../../../lib/ifAllowsMarketplace";
import useCurrencyAllowance from "../../hooks/useCurrencyAllowance";
import Total from "../../listItems/Total";
import Items from "./Items";
import Submit from "./Submit";

export default function Buy({ menuOpen, closeMenu, address, collection, bundle, buySuccessful }) {
    const { paymentToken } = bundle || {};
    const total = bundle && getListingTotal(bundle);
    const allowance = useCurrencyAllowance(address, paymentToken);
    const allowsMarketplace = ifAllowsMarketplace(allowance, total);

    return (
        <div className={`relative bg-white rounded-t-xl md:rounded-xl w-[500px] max-h-[700px] relative flex flex-col py-[20px] px-[20px] overflow-scroll ${!menuOpen && "opacity-0"}`}>
            <button onClick={closeMenu} className="flex self-end font-bold h-[35px] aspect-square border-2 border-gray-200 text-gray-600 rounded-full justify-center items-center leading-none">X
            </button>
            <div className="relative w-full flex flex-col gap-4">
                <h1 className="text-center text-2xl font-semibold text-gray-700">Buy Bundle</h1>
                <div className="relative w-full flex flex-col gap-2 px-[20px] py-[10px] common-border">
                    <Items currency={getCurrencyInfo("magic")} bundle={bundle} />
                    <Total currency={getCurrencyInfo("magic")} total={total} />
                </div>
                <Submit total={total} collection={collection} bundle={bundle} allowsMarketplace={allowsMarketplace} buySuccessful={buySuccessful} />
            </div>
        </div>
    )
}