export default function currencyABI() {
    return [
        {
            "constant": true,
            "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
            ],
            "name": "allowance",
            "outputs": [
            {
                "name": "remaining",
                "type": "uint256"
            }
            ],
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
            ],
            "name": "approve",
            "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
            ],
            "type": "function"
        }
    ]
}