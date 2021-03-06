const buildValidations = require("./build-utils/build-validations");
const argv = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const path = require("path");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const commonPaths = require("./build-utils/common-paths");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const addons = (/* string | string[] */ addonsArg) => {
  let addons = Array.isArray(addonsArg)
    ? addonsArg.filter((item) => item !== true)
    : [addonsArg].filter(Boolean);
  return addons.map((addonName) => require(`config`));
};

const commonconfig = {
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  target: "web",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]semantic-ui-([\S]+)[\\/]/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
};

const config = {
  mode: "development",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`, "webpack-plugin-serve/client"],
  },
  output: {
    filename: "[name].[fullhash].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(commonPaths.globals),
    new ReactRefreshWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
    }),
    new Serve({
      historyFallback: true,
      liveReload: false,
      hmr: true,
      host: "localhost",
      port: 3000,
      open: true,
      static: commonPaths.outputPath,
    }),
  ],
  // devServer: {
  //   open: true,
  //   clientLogLevel: "silent",
  //   contentBase: path.resolve("/public"),
  //   publicPath: "/public",
  //   historyApiFallback: true,
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "12",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "public/images/[name].[ext]",
        },
      },
    ],
  },
  watch: true,
};

module.exports = () => {
  const { env, addons: addonsArg } = argv;

  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const mergedConfig = merge(commonconfig, config);

  return mergedConfig;
};
