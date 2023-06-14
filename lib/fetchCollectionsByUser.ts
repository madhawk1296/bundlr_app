export default async function fetchCollectionsByUser(address) {
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'madhawk1296_sk_444cbcbd-2306-4a40-a625-f87e4d835f6b_0sa1akkiggbqv14t'},
        next: { revalidate: false }
    };
            
      return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/collections_by_wallets?chains=arbitrum&wallet_addresses=${address}`, options)).json()).collections;
    }