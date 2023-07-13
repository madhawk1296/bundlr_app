import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function useCurrencyAllowance(userId, currencyId) {
    const shouldFetch = userId && currencyId;
    const { data, error, isLoading } = useSWR(shouldFetch ? `/api/user/${userId}/currency/${currencyId}/allowance` : null, fetcher)
    return data?.data
}