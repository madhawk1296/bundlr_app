import getListingTotal from "../../../lib/getListingTotal";
import CurrencyImage from "../../../components/CurrencyImage";
import getListingItems from "../../../lib/getListingItems";
import getTotalItems from "../../../lib/getTotalItems";
import Bundle1155 from "../../../components/Bundle1155";
import Bundle721 from "../../../components/Bundle721";
import BundleImage from "../../../components/BundleImage";
import Link from "next/link";

export default async function Bundle({ collectionId, bundle, tokenStandard }) {
    const { seller, prices, bundleId } = bundle;
    const total = getListingTotal(bundle);
    const items = getListingItems(bundle);
    const totalItems = getTotalItems(items);
    const is1155 = tokenStandard === "ERC1155";

    return (
        <Link href={`/bundle/${seller.address}/${collectionId}/${bundleId}`}>
            <div className="w-full md:w-[200px] border-2 rounded-xl overflow-hidden flex flex-col items-center cursor-pointer smooth shadow-sm hover:shadow">
                <BundleImage collectionId={collectionId} items={items} />
                <div className="w-full h-full py-[10px] px-[10px] flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="h-[18px] flex gap-1 items-center">
                            <CurrencyImage currency="magic" />
                            <h1 className="text-lg font-bold text-gray-700 tracking-wide">{total}</h1>
                        </div>
                        <h1 className="text-sm font-semibold text-gray-700">{totalItems} Items</h1>
                    </div>
                    {is1155 ? <Bundle1155 items={items} /> : <Bundle721 items={items} /> }
                </div>
            </div>
        </Link>
    )
}