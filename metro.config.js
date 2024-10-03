const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// For build

// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig.getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();

// const {getDefaultConfig} = require('metro-config');

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig();

//   return {
//     resolver: {
//       sourceExts: [
//         ...defaultConfig.resolver.sourceExts,
//         'jsx',
//         'js',
//         'ts',
//         'tsx',
//         'json',
//       ], // Make sure to include necessary extensions
//     },
//   };
// })();
