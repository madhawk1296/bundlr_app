export default function getCurrency(currencies, value) {
    return  currencies.find((currentCurrency) => currentCurrency.name == value);
}