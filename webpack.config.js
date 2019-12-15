module.exports = {
  entry: __dirname+'/src/app.tsx',
  output: {
    path: __dirname+'/src',
    filename: 'build/app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
