import Item from "./Item"

export default function Items({ currencies, collection, items }) {
    const { treasureFloorPrice } = collection;

    return (
        <div className="w-full grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-6">
            {items.items.map((item, index) => {
                return <Item key={index} currencies={currencies} item={item} floorPrice={treasureFloorPrice} />
            })}
        </div>
    )
}