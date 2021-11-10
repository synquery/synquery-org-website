const path = require('path');
const CopyPlugin = require("copy-webpack-plugin"); // npm install copy-webpack-plugin
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [{
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: { /* jsxImportSource: …, otherOptions… */ }
        }]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "." },
        { from: "src/content", to: "content" }
      ]
    })
  ]
};