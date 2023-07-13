export default function createTokenList(collectionId, items) {
    const chain = process.env.CHAIN_ID;

    return items.map(item => {
        return `${"arbitrum-goerli"}.${collectionId}.${item.tokenId}`
    }).join(',');
}