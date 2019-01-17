module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: false,
        helpers: true
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-proposal-object-rest-spread",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ]
  ],
  env: {
    test: {
      presets: [["@babel/preset-env"]]
    },
    production: {
      presets: ["minify"]
    }
  }
};
