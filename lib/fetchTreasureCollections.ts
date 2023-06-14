export default async function fetchTreasureCollections() {
    const url = "https://api.thegraph.com/subgraphs/name/vinnytreasure/treasuremarketplace-fast-prod"
    
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

    return (await (await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })).json()).data.collections;
}