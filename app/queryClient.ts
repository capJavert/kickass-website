import { QueryClient } from '@tanstack/react-query'
import { Context, createContext } from 'react'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: false
        }
    }
})

const queryContext = createContext(queryClient) as Context<QueryClient | undefined>

export { queryClient, queryContext }
