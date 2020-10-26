module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'usage',
        corejs: {
          version: 2,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-module-resolver', {
        root: ['.'],
        alias: {
          '~': '.',
        },
      },
    ],
    'babel-plugin-import-graphql',
  ],
};
