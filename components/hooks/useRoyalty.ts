import useSWR from 'swr'
import fetcherPost from "../../lib/fetcherPost";

export default function useRoyalty(collectionId, selectedItems) {
    const dataToSend = {
        collectionId: collectionId,
        selectedItems: JSON.stringify(selectedItems),
      };

    const shouldFetch = collectionId && selectedItems.length > 0

    const { data, error, isLoading } = useSWR(shouldFetch ? [`/api/royalty`, dataToSend] : null, fetcherPost)
    return data?.data
}