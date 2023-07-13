import numeral from 'numeral';

export default function formatNumber(number, short=false, long=false) {
    const n = numeral(number)

    if (n.value() > 100) {
        return n.format('0.[00]a');
    } else { 
        return short ? 
            n.format('0.000a') 
            : long ? 
                n.format('0.[00000]A')
                : n.format('0.[00]A')
    }
}