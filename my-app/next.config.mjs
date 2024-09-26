/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    images: {
        domains: ['dummyjson.com' , 'images.pexels.com'], 
    },
};

export default withNextIntl(nextConfig);
