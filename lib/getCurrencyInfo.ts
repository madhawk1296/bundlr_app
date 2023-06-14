import currenciesData from "../data/currencies";

export default function getCurrencyInfo(value) {
    return currenciesData.find((currentCurrency) => currentCurrency.name == value)
}