import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

export default function useUser(user) {
    const { data, error, isLoading } = useSWR(`/api/user/${user}`, fetcher)
    return data?.data
}