export default async function fetchCollectionMarketData(collectionId) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };
      
    return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/collections_activity?collection_ids=${collectionId}`, options)).json()).collections[0];
}