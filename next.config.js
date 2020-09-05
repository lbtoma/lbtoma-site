module.exports = {
  webpack: (config, options) => {
    config.node = {
      ...config.node,
      fs: "empty",
    }

    return config
  },
}
