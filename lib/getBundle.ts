import getListing from "./getListing";

export default async function getBundle(sellerId, collectionId, bundleId) {
    return await getListing(sellerId, collectionId, bundleId);
}