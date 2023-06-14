export default function getCurrencyName(currency: string): string {
  console.log(currency)

  switch (currency) {
    case 'Wrapped Ether':
      return 'eth'
    case 'MAGIC':
      return 'magic'
    case 'USD Coin (Arb1)':
      return 'usdc'
    case 'Dai Stablecoin':
      return 'dai'
    case 'Tether USD':
      return 'usdt'
    default:
      return ''
  }
}