export default async function fetchListing(listingId) {
    const query = `
    query {
        listings(where: {id_containsInsensitive: "${listingId}"}) {
            id
            bundleId
            seller {
                address
            }
            collection {
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
  `;

    return (await (await fetch(process.env.GRAPH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        next: {
            revalidate: 5
        }
      })).json()).data.listings[0];
}