import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function collectionOwnership(address, collection) {
    const { data, error, isLoading } = useSWR(`/api/user/${address}/collection/${collection}/ownership`, fetcher)
    return data?.data
}