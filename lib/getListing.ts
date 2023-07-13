import fetchListing from "./fetchListing";

export default async function getListing(sellerId, collectionId, bundleId) { 
    const listingId = `${sellerId}-${collectionId}-${bundleId}`;

    return await fetchListing(listingId);
}