export default async function fetchBatchCollections(batch) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };

    const batchIds = batch.map(collection => collection.id);
    const batchFormatted = encodeURIComponent(batchIds.join(','))

    return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/collections/arbitrum?limit=50&contract_addresses=${batchFormatted}`, options)).json()).collections;
}
