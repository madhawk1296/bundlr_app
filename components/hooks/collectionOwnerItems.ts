import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function collectionOwnerItems(address, collection) {
    const { data, error, isLoading } = useSWR(`/api/user/${address}/collection/${collection}`, fetcher)
    return data?.data
}