module.exports = {
  entry: "./src/client/js/main.jsx",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel?presets[]=react,presets[]=es2015"}
    ]
  },
  output: {
    filename: './build/client/bundle.js'
  }
}
