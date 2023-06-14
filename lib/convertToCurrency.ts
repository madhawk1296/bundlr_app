import getCurrencyPrice from "./getCurrencyPrice";

export default function convertToCurrency(currencies, value, fromCurrency, toCurrency) {
    // Convert the value to a universal currency (like USD, if rates are relative to USD)
    const valueInUniversalCurrency = Number(value) * Number(getCurrencyPrice(currencies, fromCurrency));
    
    if(toCurrency === 'usd') {
        return valueInUniversalCurrency;
    } 

    if(fromCurrency === toCurrency) {
        return value;
    } else {
        // Convert from the universal currency to the target currency
        const valueInTargetCurrency = valueInUniversalCurrency / Number(getCurrencyPrice(currencies, toCurrency));
        return valueInTargetCurrency;
    }
}