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
};
