import numeral from 'numeral';

export default function formatPercent(number) {
    const n = numeral(number)

    return n.format('0.[00]%');
}