export default async function fetchTreasureCollections() {
    const query = `
    query {
        collections(first: 1000) {
          id
          tokenStandard
          fee {
            collectionFee
          }
          stat {
            sales
            volume
          }
        }
    }
  `;

    return (await (await fetch(process.env.TREASURE_GRAPH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })).json()).data.collections;
}