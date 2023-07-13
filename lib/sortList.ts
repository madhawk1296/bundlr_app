import getFloorPrice from "./getFloorPrice";

export default function sortList(list, options) {
    const { sort: { value }, isAscending } = options;

    const compareFunctions = {
        'name': (a, b) => a.name?.localeCompare(b.name),
        'floor_price': (a, b) => {
            return getFloorPrice(a.floorPrices) - getFloorPrice(b.floorPrices)
        },
        'owned': (a, b) => a.totalCopiesOwned - b.totalCopiesOwned
    };

    const compare = compareFunctions[value];

    return isAscending ? list.sort(compare) : list.sort((a, b) => -compare(a, b));
}