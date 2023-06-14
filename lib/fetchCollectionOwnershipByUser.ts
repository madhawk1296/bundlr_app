export default async function fetchCollectionOwnershipByUser(user, collection) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  return (await (await fetch(`https://api.n.xyz/api/v1/address/${user}/balances/nfts?chainID=arbitrum&limit=20&filterSpam=false&contractAddresses=${collection}&apikey=8077026b-ab3c-49dd-9fec-42a75daa6fad`, options)).json());

}