import createCurrencyContractInstance from "./createCurrencyContractInstance";
import fromWeiToEther from "./fromWeiToEther";

export default async function fetchCurrencyAllowance(userId, currencyId) {
    const contract = await createCurrencyContractInstance(currencyId);

    const allowance = await contract.allowance(userId, process.env.NEXT_PUBLIC_BUNDLR_ADDRESS);
    return fromWeiToEther(allowance.toString());
  }