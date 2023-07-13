export default async function fetchTokens(tokenList) { 
    const options: any = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API_KEY},
        next: { revalidate: false }
    };
            
    return (await (await fetch(`https://api.simplehash.com/api/v0/nfts/assets?nft_ids=${encodeURIComponent(tokenList)}`, options)).json()).nfts;
}