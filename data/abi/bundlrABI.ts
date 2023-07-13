export default function bundlrABI() {
    return [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_feeRecipient",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_weth",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenIds",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          }
        ],
        "name": "BidAccepted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          }
        ],
        "name": "BidCanceled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenIds",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "isERC1155",
            "type": "bool"
          }
        ],
        "name": "BidCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          }
        ],
        "name": "BidUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          }
        ],
        "name": "ListingCanceled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenIds",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "isERC1155",
            "type": "bool"
          }
        ],
        "name": "ListingCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenIds",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          }
        ],
        "name": "ListingPurchased",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "prices",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          }
        ],
        "name": "ListingUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "BASIS_POINTS",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "bids",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isERC1155",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeRecipient",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "listings",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "bundleId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isERC1155",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "expirationTime",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "weth",
        "outputs": [
          {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_tokenIds",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          },
          {
            "internalType": "uint64",
            "name": "_expirationTime",
            "type": "uint64"
          }
        ],
        "name": "createListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          },
          {
            "internalType": "uint64",
            "name": "_expirationTime",
            "type": "uint64"
          }
        ],
        "name": "updateListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_tokenIds",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          },
          {
            "internalType": "uint64",
            "name": "_expirationTime",
            "type": "uint64"
          }
        ],
        "name": "createBid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          },
          {
            "internalType": "uint64",
            "name": "_expirationTime",
            "type": "uint64"
          }
        ],
        "name": "updateBid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          }
        ],
        "name": "cancelListing",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          }
        ],
        "name": "cancelBid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_seller",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          },
          {
            "internalType": "bool",
            "name": "_usingEth",
            "type": "bool"
          }
        ],
        "name": "buyBundle",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_paymentToken",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          }
        ],
        "name": "acceptBid",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "getRoyaltyInfo",
        "outputs": [
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_royaltyAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256[]",
            "name": "_amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_prices",
            "type": "uint256[]"
          }
        ],
        "name": "getTotalPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "supportsEIP2981",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          }
        ],
        "name": "isERC1155Contract",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_feeRecipient",
            "type": "address"
          }
        ],
        "name": "changeFeeRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_isListing",
            "type": "bool"
          }
        ],
        "name": "getBundleCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_bundleId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_isListing",
            "type": "bool"
          }
        ],
        "name": "isBundleActive",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
}