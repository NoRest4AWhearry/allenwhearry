const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const merge = require('webpack-merge');

const validate = require('webpack-validator');

const utils = require('./lib/utils');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'main.css'),
  build: path.join(__dirname, 'build')
};

const common = {

  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
  	style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [HTMLWebpackPluginConfig]
};


var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
	case 'build':
  case 'stats':
    config = merge(
    	common,
    	{
    		devtool: 'source-map',
    		output: {
    			path: PATHS.build,
    			filename: '[name].[chunkhash].js',
    			// This is used for require.ensure. The setup
    			// will work without but this is useful to set.
    			chunkFilename: '[chunkhash].js'
    		}
    	},
    	utils.clean(PATHS.build),
    	utils.setFreeVariable(
    		'process.env.NODE_ENV',
    		'production'
    	),
    	utils.extractBundle({
    		name: 'vendor',
    		entries: []
    	}),
    	utils.minify(),
    	utils.extractCSS(PATHS.style),
    	// purifyCSS must come after extract plugin
    	utils.purifyCSS([PATHS.app])
    );
    break;
  default:
    config = merge(
      common,
      {
      	devtool: 'eval-source-map'
      },
      utils.setupCSS(PATHS.style),
      utils.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config, {
	quite: true
});