export default async function fetchCollectionOwnershipByUser(user, collection) {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  return (await (await fetch(`https://api.n.xyz/api/v1/address/${user}/balances/nfts?chainID=arbitrum&limit=20&filterSpam=false&contractAddresses=${collection}&apikey=${process.env.NXYZ_API_KEY}`, options)).json());

}