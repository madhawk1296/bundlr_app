import { redirect } from 'next/navigation'

export default function Page({ params }) {
    redirect(`/user/${params.userId}/listings`)
}