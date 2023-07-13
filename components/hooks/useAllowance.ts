import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function useAllowance(userId, collectionId) {
    const shouldFetch = userId && collectionId;
    const { data, error, isLoading } = useSWR(shouldFetch ? `/api/user/${userId}/collection/${collectionId}/allowance` : null, fetcher)
    return data?.data
}