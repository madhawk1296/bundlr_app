export default async function fetchTreasureCollection(collectionId) {
    const query = `
    query {
        collection(id: "${collectionId}") {
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
      })).json()).data.collection;
}