const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports =  (env, argv) => {
    const isProduction = argv.mode === 'production';
    const jekyllEnv = process.env.JEKYLL_ENV || "development";

    return {


        entry: {
            "index": "./assets/js/index.js",
            "style": "./assets/css/style.css",
        },
        output: {
            filename: '[name].js',
            path: __dirname + "/source/assets",
        },


        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],


        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }, {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1, // run postcss-loader for all @import files
                            },
                        },
                        "postcss-loader",
                    ],
                }, {
                    test: /\.(woff|woff2|ttf|eot|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[hash].[ext]',
                    },
                },
            ]
        },


        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'style',
                        type: 'css/mini-extract',
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        }


    }
}