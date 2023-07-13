export default async function fetchCollectionListings(collectionId) {
    const query = `
    query {
        collections(where: {address_containsInsensitive: "${collectionId}"}) {
            tokenStandard
            listings(where: {status_eq: ACTIVE}) {
                id
                bundleId
                seller {
                    address
                }
                tokenIds
                amounts
                paymentToken
                prices
                status
                expirationTime
            }
        }
    }
  `;

    return (await (await fetch(process.env.GRAPH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        next: {
            revalidate: 5
        }
      })).json()).data.collections[0];
}