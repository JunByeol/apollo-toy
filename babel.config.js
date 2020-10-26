module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['babel-plugin-module-resolver', {
      root: ['.'],
      alias: {
        '~': '.',
      },
    }],
    'babel-plugin-import-graphql',
    'babel-plugin-macros',
  ],
};
