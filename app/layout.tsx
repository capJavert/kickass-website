import '../styles/globals.css'

import Script from 'next/script'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="author" content="Ante Barić" />

                <title>Ante Barić | Me</title>

                <link rel="apple-touch-icon" sizes="57x57" href="/me/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/me/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/me/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/me/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/me/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/me/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/me/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/me/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/me/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/me/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/me/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/me/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/me/favicon-16x16.png" />
                <link rel="manifest" href="/me/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                {/* eslint-disable @next/next/no-page-custom-font, @next/next/google-font-display */}
                <link
                    href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* eslint-enable @next/next/no-page-custom-font, @next/next/google-font-display */}
            </head>
            <body>{children}</body>
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    
                        ga('create', '${process.env.GA_ID}', 'auto');
                        ga('send', 'pageview');
                    `
                }}
            />
        </html>
    )
}

export default RootLayout
