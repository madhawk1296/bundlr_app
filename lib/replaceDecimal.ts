export default function replaceDecimal(value) {
    return value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
}