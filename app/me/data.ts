const handleResponse = async (response: Response) => {
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.message || `HTTP Error ${response.status}`)
    }

    return result
}

const getData = async () => {
    const [page, me, skills, social] = await Promise.all([
        fetch(`${process.env.API_URL || process.env.VERCEL_URL}/pages/me`).then(handleResponse),
        fetch(`${process.env.API_URL || process.env.VERCEL_URL}/me`).then(handleResponse),
        fetch(`${process.env.API_URL || process.env.VERCEL_URL}/skills`).then(handleResponse),
        fetch(`${process.env.API_URL || process.env.VERCEL_URL}/social`).then(handleResponse)
    ])

    return {
        data: {
            page,
            me,
            skills,
            social
        }
    }
}

export { getData }
