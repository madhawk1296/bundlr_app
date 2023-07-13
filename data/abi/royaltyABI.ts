export default function royaltyABI() {
    return (
        [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "_salePrice",
                        "type": "uint256"
                    }
                ],
                "name": "royaltyInfo",
                "outputs": [
                    {
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "name": "royaltyAmount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
    )
}