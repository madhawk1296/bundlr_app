export default async function fetchCollectionsByUser(address) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };
            
      return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/collections_by_wallets?chains=${process.env.CHAIN_ID}&wallet_addresses=${address}`, options)).json()).collections;
    }