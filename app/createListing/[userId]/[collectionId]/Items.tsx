import Item from "./Item"

export default function Items({ currencies, collection, items }) {
    const { treasureFloorPrice } = collection;

    return (
        <div className="w-full flex flex-wrap gap-6">
            {items.items.map((item, index) => {
                return <Item key={index} currencies={currencies} item={item} floorPrice={treasureFloorPrice} />
            })}
        </div>
    )
}