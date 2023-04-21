/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

const styledComponent = {
    compiler: { styledComponents: true, }
}

module.exports = {
    ...withVideos(),
    ...nextConfig,
    ...styledComponent,
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
        return config
    },
    images: {
        domains: ['images.unsplash.com'],
    }
}
