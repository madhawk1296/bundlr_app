export default function getCurrencyPrice(currencies, name) {
    return currencies.find(currency => currency.name === name)?.value;
}