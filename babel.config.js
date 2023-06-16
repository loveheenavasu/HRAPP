// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         root: ['.'],
//         alias: {
//           '@Util': './src/Util',
//           '@src': './src',
//           '@CommonComponent': './src/CommonComponent',
//         },
//       },
//       'react-native-reanimated/plugin',
//     ],
//   ],
// };

const pak = require('./package.json');
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        root: ['.'],
        alias: {
          '@Util': './src/Util',
          '@src': './src',
          '@CommonComponent': './src/CommonComponent',
          '@Validator': './src/Util/Validator',
        },
      },
    ],
    'react-native-reanimated/plugin', // PUT IT HERE
  ],
};
