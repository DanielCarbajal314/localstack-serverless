module.exports = {
    entry: './handler.js',
    target: 'node',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { test: /\.node$/, use: "node-loader"}
        ]
      }
};