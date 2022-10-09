module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@shared': './src/components/shared',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@ui': './src/components/ui',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@src': './src',
            '@queryKeys': './src/utils/queryKeys',
          },
        },
      ],
    ],
  };
};
