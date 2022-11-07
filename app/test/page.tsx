import { Suspense } from 'react'

import Click from './Click'
import Lazy from './Lazy'
import LazyClient from './LazyClient'

const Page = () => {
    return (
        <>
            <h1>Test</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-expect-error Server Component */}
                <Lazy />
            </Suspense>
            <LazyClient />
            <br />
            <Click />
        </>
    )
}

export default Page
