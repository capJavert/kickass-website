const getData = async () => {
    const response = await fetch(`${process.env.API_URL || process.env.VERCEL_URL}/api/me/`)
    const data = await response.json()

    return { response, data }
}

const Page = async () => {
    const { data } = await getData()

    return data.name
}

export const dynamicParams = true

export default Page
