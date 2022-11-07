'use client'

import { useState } from 'react'

const Click = () => {
    const [clicks, setClicks] = useState(0)

    return (
        <button
            onClick={() => {
                setClicks(current => current + 1)
            }}
        >
            Clicked {clicks}
        </button>
    )
}

export default Click
