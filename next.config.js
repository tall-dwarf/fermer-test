/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: "export",
    basePath: "/fermer-test",
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
