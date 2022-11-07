const Lazy = async () => {
    const data = await fetch(`${process.env.API_URL || process.env.VERCEL_URL}/me`, {
        next: {
            revalidate: 0
        }
    }).then(res => res.json())

    await new Promise(resolve => setTimeout(resolve, 2500)) // add a little latency for testing purposes

    return <div>Lazy {data.username}</div>
}

export default Lazy
