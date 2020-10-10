const defaultRules = require('./rules/default');
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    uni: true,
    wx: true,
    plus: true,
    getApp: true,
    UniApp: true,
  },
  rules: {
    ...defaultRules
  },
};
