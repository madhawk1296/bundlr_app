import createTokenList from "./createTokenList"
import fetchTokens from "./fetchTokens";

export default async function gatherTokens(collectionId, items) {
    const tokenList = createTokenList(collectionId, items)
    return await fetchTokens(tokenList);
}