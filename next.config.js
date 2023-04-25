/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

// next.config.js
const withMakeswift = require('@makeswift/runtime/next/plugin')()

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

const styledComponent = {
    compiler: { styledComponents: true, }
}

module.exports = withMakeswift({
    ...withVideos(),
    ...nextConfig,
    ...styledComponent,
    future: {
        webpack5: true,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }
            ]
        })
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config
    },
    images: {
        domains: ['images.unsplash.com'],
    }
})
