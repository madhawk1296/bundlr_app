export default function ifAllowsMarketplace(allowance, total): boolean {
    return (allowance && total) && allowance >= total;
}