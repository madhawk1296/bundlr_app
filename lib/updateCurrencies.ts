import gatherCurrencies from "./gatherCurrencies";
import standardizeCurrencies from "./standardizeCurrencies";
import updateCurrenciesDB from "./updateCurrenciesDB";

export default async function updateCurrencies() {
    const currencies = await gatherCurrencies();
    const standard = standardizeCurrencies(currencies);
    await updateCurrenciesDB(standard);
}