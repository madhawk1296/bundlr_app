import collectionNotHidden from "./collectionNotHidden";

export default function filterCollections(collections) {
    if(process.env.CHAIN_ID == "arbitrum") {
        return collections.filter(collection => collection.imageUrl != null && collectionNotHidden(collection.address));
    } else {
        return collections;
    }
}