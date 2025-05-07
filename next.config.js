const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: 'denial'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  experimental: {
    appDir: true
  },
  env: {
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "self",
    formats: ['image/avif', 'image/webp']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;


