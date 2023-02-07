/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "media-cdn.tripadvisor.com",
      "st3.depositphotos.com",
      "st.depositphotos.com",
      "cdn.georgiantravelguide.com",
      "museumofwander.com",
    ],
  },
};

module.exports = nextConfig;
