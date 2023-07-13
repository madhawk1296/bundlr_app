import CurrencyImage from "../../../../../components/CurrencyImage";
import getListingItems from "../../../../../lib/getListingItems";
import getListingTotal from "../../../../../lib/getListingTotal";
import BuyBundle from "./BuyBundle";
import ListingDetailTitle from "./ListingDetailTitle";
import ListingItem from "./ListingItem";

export default function Info({ collection, bundle }) {
    const { name, description } = collection || {};
    const total = getListingTotal(bundle);
    const items = getListingItems(bundle);

    return (
        <div className="w-full h-full py-[20px] px-[15px] md:px-[40px] flex flex-col gap-5">
            <h1 className="text-4xl font-semibold text-gray-900">{name} Bundle</h1>
            <h1 className="text-md font-medium text-gray-700">{description}</h1>
            <div className="flex flex-col gap-4 border-2 items-center rounded-lg py-[20px] px-[20px]">
                <div className="flex flex-col gap-1">                    
                    <h1 className="text-md font-medium text-gray-500">Listing price</h1>
                    <div className="relative flex gap-2 items-center h-[25px]">
                        <CurrencyImage currency="magic" />
                        <h1 className="text-2xl font-bold text-gray-900 tracking-wide">{total}</h1>
                    </div>
                </div>
                <BuyBundle collection={collection} bundle={bundle} />
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex justify-between border-b-2 py-[5px]">
                        <ListingDetailTitle title="Item" />
                        <ListingDetailTitle title="Quantity" />
                        <ListingDetailTitle title="Price per item" />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        {items.map((item, index) => <ListingItem key={index} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}