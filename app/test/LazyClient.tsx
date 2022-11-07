'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { queryContext } from '../queryClient'

const getData = async () => {
    const response = await fetch('/api/pages/me')
    const result = response.json()

    await new Promise(resolve => setTimeout(resolve, 2500)) // add a little latency for testing purposes

    return result
}

const LazyClient = () => {
    const { data } = useQuery(['data', 'test', 'LazyClient'], getData, {
        context: queryContext
    })
    const router = useRouter()

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>Lazy on client {data?.title?.raw}</div>
            <button
                onClick={() => {
                    router.refresh()
                }}
            >
                Refresh data
            </button>
        </>
    )
}

export default LazyClient
