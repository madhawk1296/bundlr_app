export default function getFloorPrice(floorPrices) {
    return floorPrices?.[0]?.value || 0
}