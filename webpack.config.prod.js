// import the path package, as we are using babel, 'require' is changed to 'import from'
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

// Webpack is configured by 'export'ing an object
export default {
   // 'debug' was removed in webpack 2.0.0
   //debug: true,
   // 'devtool' has been set to inline-source-map, source-map ones are for higher quality
   devtool: 'source-map',
   // Setting 'noInfo' to false means that Webpack will display the list of all the files that it is bundling
   // Best to set this to TRUE during PROD, as it adds a lot of noise
   // noInfo, not available for webpack 2.0.0 or higher
   //noInfo: false,

   // The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   // You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
   mode: 'production',

   // This is the entry point of the Webpack
   entry: [
      // Not doing a hot-reloading at this point and just keeping it simple to the SRC/Index
      // using __dirname, which is part of node.js, which will give the full path here.
      // also using the 'path' package, which also comes with node.js and has been imported above
      path.resolve(__dirname, 'src/index')
   ],

   // the target of the Webpack bundle for our current purpose is the web. It could also be 'node', or 'elektron' for desktop apps
   target: 'web',

   // This informs Webpack, where it should create the DEV bundle
   // Webpack in the current code does not actually create the physical files, but will serve the build from memory.
   // But while defiinig the output, the path and file names are specified to Webpack
   output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
   },

   // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
   plugins: [
      new HtmlWebpackPlugin({
         template: 'src/index.html',
         minify:{
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
         },
         inject: true
      })
   ],
   optimization: {
      minimize: true
   },
   // This informs Webpack about the file types that we wish to handle
   module: {
      // 'rules' informs Webpack how to handle different file types, it is the new 'loaders'
      rules: [{
         // include .js files
         // we are asking it to handle .JS files
         test: /\.jsx?$/,
         // preload the jshint loader
         enforce: "pre",
         // exclude any and all files in the node_modules folder
         exclude: /node_modules/,
         // Use the babel loader. With webpack 2.0.0, the -loader suffix is not allowed to be omitted
         loader: ['babel-loader']
      },
         {
            // also, it is handling the .CSS files for us.
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
         }]
   },
}