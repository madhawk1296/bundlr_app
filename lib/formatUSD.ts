import numeral from 'numeral';

export default function formatUSD(number) {
    return numeral(number).format('$0.00a');
}