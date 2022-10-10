const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/monokai.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, showCopyButton: true, lineNumbers: true }]],
    rehypePlugins: [],
  },
})

module.exports = withMDX(nextConfig)
