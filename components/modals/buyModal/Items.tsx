import getListingItems from "../../../lib/getListingItems"
import Item from "./Item";

export default function Items({ currency, bundle }) {
    const items = bundle ? getListingItems(bundle) : [];

    return (
        <div className="relative w-full flex flex-col gap-4">
            {items.map((item, i) => <Item key={i} currency={currency} item={item} />)}
        </div>
    )
}