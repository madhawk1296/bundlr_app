import fetcher from "../../lib/fetcher"
import useSWR from 'swr'

export default function collectionInfo(collection) {
    const { data, error, isLoading } = useSWR(`/api/collection/${collection}`, fetcher)
    return data?.data
}