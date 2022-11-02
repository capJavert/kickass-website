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
                source: '/me',
                destination: '/me/index.html'
            }
        ]
    }
}

module.exports = nextConfig
