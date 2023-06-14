import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function useCurrencies() {
    const { data, error, isLoading } = useSWR(`/api/currencies`, fetcher)
    return data?.data
}