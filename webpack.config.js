const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './js-src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    library: 'Global'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config;