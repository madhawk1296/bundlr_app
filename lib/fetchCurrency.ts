export default async function fetchCurrency(address) {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
  
    const result = (await (await fetch(`https://api.n.xyz/api/v1/fungibles/${address}/metadata?chainID=arbitrum&apikey=${process.env.NXYZ_API_KEY}`, options)).json())[0];
    return result;

  }