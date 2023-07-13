import formatNumber from "../../../lib/formatNumber";
import formatPercent from "../../../lib/formatPercent";
import getCreatorFee from "../../../lib/getCreatorFee";
import useAllowance from "../../hooks/useAllowance";
import useRoyalty from "../../hooks/useRoyalty";
import Item from "../../listItems/Item";
import Total from "../../listItems/Total";
import Detail from "./Detail";
import Expires from "./Expires";
import Submit from "./Submit";

export default function List({ menuOpen, closeMenu, address, collection, selectedItems, currency, total, expires, changeExpires, listingSuccessful }) {
    const allowsMarketplace = useAllowance(address, collection?.address);
    const royalties = useRoyalty(collection?.address, selectedItems);
    const [creatorShare, creatorFee] = getCreatorFee(total, royalties);
    const platformShare = 0.025;
    const platformFee = total * platformShare;
    const sellerShare = 1 - (creatorShare + platformShare);
    const sellerTotal = total * sellerShare; 

    return (
        <div className={`relative bg-white rounded-t-xl md:rounded-xl w-[500px] max-h-[700px] relative flex flex-col py-[20px] px-[20px] overflow-scroll ${!menuOpen && "opacity-0"}`}>
            <button onClick={closeMenu} className="flex self-end font-bold h-[35px] aspect-square border-2 border-gray-200 text-gray-600 rounded-full justify-center items-center leading-none">X
            </button>
            <div className="relative w-full flex flex-col gap-4">
                <h1 className="text-center text-2xl font-semibold text-gray-700">List Items</h1>
                <div className="relative w-full flex flex-col gap-2 px-[20px] py-[10px] common-border">
                    <div className="relative w-full flex flex-col gap-4">
                        {selectedItems.map((item, index) => <Item key={index} item={item} currency={currency} />)}
                    </div>
                    <Total currency={currency} total={total} />
                </div>
                <Expires expires={expires} changeExpires={changeExpires} />
                <div className="relative w-full flex flex-col gap-2 px-[20px] ">
                    <Detail title="Total" value={formatNumber(total, null, true)} currency={currency} />
                    <Detail title={`Creator Fee(${formatPercent(creatorShare)})`} value={formatNumber(creatorFee)} currency={currency} />
                    <Detail title={`Platform Fee(${formatPercent(platformShare)})`} value={formatNumber(platformFee)} currency={currency} />
                    <Detail title={`Your Share(${formatPercent(sellerShare)})`} value={formatNumber(sellerTotal)} currency={currency} />
                </div>
                <Submit collection={collection} selectedItems={selectedItems} currency={currency} expires={expires} allowsMarketplace={allowsMarketplace} listingSuccessful={listingSuccessful} />
            </div>
        </div>
    )
}