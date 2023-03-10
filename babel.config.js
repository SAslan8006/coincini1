module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        ['react-native-paper/babel'],
        ['babel-plugin-root-import', { paths: [{ rootPathPrefix: '~', rootPathSuffix: 'src' }] }]
      ],
    },
  },
};