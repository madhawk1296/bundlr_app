export default async function fetchCollection(address) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };
            
      return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/collections/${process.env.CHAIN_ID}/${address}?limit=50`, options)).json()).collections[0];
    }