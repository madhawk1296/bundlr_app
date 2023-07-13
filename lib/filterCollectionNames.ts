export default function filterCollectionNames(search, colllections) {
    return colllections.filter(collection => collection.name.toLowerCase().includes(search.toLowerCase()))
}