const path = require('path');

module.exports = (env, argv) => {
  const {mode} = argv
  return {
    entry: './blocks/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'dist/'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', [
                '@babel/preset-react',
                {
                  'pragma': 'wp.element.createElement',
                  'pragmaFrag': 'wp.element.Fragment',
                  'development': mode === 'development',
                },
              ]],
            },
          },
        },
      ],
    },
    externals: {
      'jquery': 'jQuery',
    },
  }
}
