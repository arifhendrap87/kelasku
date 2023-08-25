

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        alias: {
          "@components": "./app/components",
          "@navigation": "./app/navigation",
          "@screens": "./app/screens",
          "@actions": "./app/actions",
          "@assets": "./app/assets",
          "@config": "./app/config",
          "@data": "./app/data",
          "@lang": "./app/lang",
          "@reducers": "./app/reducers",
          "@store": "./app/store",
          "@utils": "./app/utils",
          // Add more aliases as needed
        }
      }
    ]
  ]
};