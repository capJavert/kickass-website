const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    experimental: {
        appDir: true
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: securityHeaders
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/me',
                permanent: false
            }
        ]
    },
    rewrites: async () => {
        return [
            {
                source: '/me-old',
                destination: '/me/index.html'
            },
            {
                source: '/api/:path*',
                destination: 'https://api.kickass.website/:path*'
            }
        ]
    }
}

module.exports = nextConfig
