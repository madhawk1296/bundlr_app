import createAllowanceContractInstance from "./createAllowanceContractInstance";

export default async function fetchAllowance(userId, collectionId) {
    const contract = await createAllowanceContractInstance(collectionId);
    return await contract.isApprovedForAll(userId, process.env.NEXT_PUBLIC_BUNDLR_ADDRESS);

  }