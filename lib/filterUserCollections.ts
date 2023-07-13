export default function filterUserCollections(user) {
    if(process.env.CHAIN_ID == "arbitrum") {
        return user.collections.filter(collection => collection.imageUrl != null);
    } else {
        return user.collections;
    }
}