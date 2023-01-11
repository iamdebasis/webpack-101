const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "/src/index"),
    // bundle2: path.resolve(__dirname, "/src/index"), //we can have multiple entry points specify whatever is needed in index.html
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name][contenthash].js", //this name will be taken from entry. contenthash will add
    // a randomly generated number with the name, and add that in index.html autonetically.
    clean: true, //after we run npm run build it will ckean up previous build
    assetModuleFilename: "[name][ext]", //for our assets
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  //   plugins: [new BundleAnalyzerPlugin()],
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "build/index"),
    port: 9000,
    open: true, //open browser autometically when run.
    hot: true, // hot reload true
    compress: true,
    historyApiFallback: true,
  },
  //this will rum from system memory directly, will not run from duild folder. if we do not
  // have duild folder still it will run.
};

//html webpack plugin ...
//plugins are more powerful than loaders
