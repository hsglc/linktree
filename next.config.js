/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['pbs.twimg.com', 'miro.medium.com'],
    },
};

module.exports = nextConfig;
