const path = require('path');

module.exports = {
  entry: "./index.tsx",
  output: {
    filename: 'output.js',
  },
  resolveLoader: {
    alias: {
      'my-own-loader': path.resolve(__dirname, "my-own-loader.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.api$/,
        exclude: /node_modules/,
        use: [
          { loader: "ts-loader" },
          { loader: "my-own-loader" }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.api$/]
        }
      }

    ]
  },
};