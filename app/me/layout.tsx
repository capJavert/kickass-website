import { NextSeo } from 'next-seo'

import { getData } from './data'

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const { data } = await getData()

    return (
        <>
            <NextSeo
                useAppDir
                title="Ante Barić | Me"
                description={data.me.about}
                openGraph={{
                    images: [
                        {
                            url: 'https://avatars0.githubusercontent.com/u/9803078?v=4&u=1c51db45f535cc563b4ef7f923d09a1d78eda358&s=400',
                            alt: 'Ante Barić (capJavert)'
                        }
                    ]
                }}
            />
            {children}
        </>
    )
}

export default Layout
