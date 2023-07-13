import { ethers } from "ethers";

export default function createContractInstance(abi, address) { 
    const { ALCHEMY_API_KEY, CHAIN_ID } = process.env;
    
    // Create an instance of ethers provider
    const provider = new ethers.AlchemyProvider(CHAIN_ID, ALCHEMY_API_KEY);

    return new ethers.Contract(address, abi, provider);
}