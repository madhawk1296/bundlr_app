import currencies from "../data/currencies";
import fetchCurrency from "./fetchCurrency";

export default async function gatherCurrencies() {
    const currenciesData = currencies.map(currency => {
      return fetchCurrency(currency.address)
    })

    return await Promise.all(currenciesData);
}