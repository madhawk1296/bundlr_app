export default function getAddressFromContracts(top_contracts) {
    return top_contracts[0].split(".")[1]
}