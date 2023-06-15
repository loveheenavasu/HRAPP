module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@Util': './src/Util',
          '@src': './src',
          "@CommonComponent":"./src/CommonComponent",
        },
      },
    ],
  ],
};
