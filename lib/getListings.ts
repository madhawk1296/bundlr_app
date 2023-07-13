import fetchCollectionListings from "./fetchCollectionListings";

export default async function getListings(collectionId) { 
    return await fetchCollectionListings(collectionId);
}