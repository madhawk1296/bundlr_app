import numeral from 'numeral';

export default function condenseNumber(number) {
    return number > 999 ? numeral(number).format('0.0a') : number;
}