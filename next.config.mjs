// next.config.mjs (PROJECT ROOT)
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  output: 'standalone', // For Cloudflare Pages
  images: {
    remotePatterns: [{ hostname: 'pub-*.r2.dev' }],
    unoptimized: true, // Workers don't support next/image optimizer
  },
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // ❌ REMOVE the i18n block - next-intl handles routing via plugin
};

export default withNextIntl(nextConfig);