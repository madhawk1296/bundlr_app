export default async function fetchCollectionItemsByUser(user, collection) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };
            
      return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/owners?chains=${process.env.CHAIN_ID}&wallet_addresses=${user}&contract_addresses=${collection}&limit=50`, options)).json()).nfts;
    }