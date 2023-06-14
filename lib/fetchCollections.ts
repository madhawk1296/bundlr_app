export default async function fetchCollections() {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };

    return (await (await fetch('https://api.simplehash.com/api/v0/nfts/collections/top?time_period=30d&chains=arbitrum&metric_type=top', options)).json()).collections;
}
