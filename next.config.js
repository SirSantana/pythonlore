/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    BASE_URL:'http://localhost:3000',
    DBNAME: process.env.DBNAME,
    ACCESS_TOKEN_SECRET: "test",
    REFRESH_TOKEN_SECRET: "test",
    ADMIN:process.env.ADMIN,
    NEXT_PUBLIC_PASSWORD:process.env.NEXT_PUBLIC_PASSWORD

  },
  images: {
    domains: ['https://pythonjoyas.vercel.app'],
    subDomains: ['https://pythonjoyas.vercel.app/api/products']
  },

}

module.exports = nextConfig
