import getCurrencyName from "./getCurrencyName";

export default function standardizeCurrencies(currencies) {
    return currencies.map(currencies => {
        const { contractAddress, name, symbol, decimals, currentFiat  } = currencies
        const { tokenValue } = currentFiat[0];

        return {
            _id: contractAddress,
            name: getCurrencyName(name),
            address: contractAddress,
            symbol,
            decimals,
            value: tokenValue
        }
    })
}