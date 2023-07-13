export default async function fetchUserSales(userId) {
        const query = `
    query {
        users(where: {id_containsInsensitive: "${userId}"}) {
            sells {
                id
                bundleId
                collection {
                    address
                }
                tokenIds
                amounts
                paymentToken
                prices
                tokenStandard
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
      })).json()).data.users[0]?.sells;
}