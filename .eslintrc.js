module.exports = {
  env: {
    browser: false,
    commonjs: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2015,
  },
  reportUnusedDisableDirectives: true,
};
