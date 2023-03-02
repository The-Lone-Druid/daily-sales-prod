/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://the-lone-druid.github.io/Daily-Sales/"],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
