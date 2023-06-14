import getCurrencies from "./getCurrencies";
import updateCurrencies from "./updateCurrencies";

export default async function getOrUpdateCurrencies() {
    const currencies = await getCurrencies();

    // if user exists, return user collections, else update user and return user collections
    if(currencies) {
        updateCurrencies();
        return currencies;
    } else {
        await updateCurrencies();
        return await getCurrencies();
    }
}