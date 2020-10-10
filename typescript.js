const defaultRules = require('./rules/default');
const typescriptRules = require('./rules/typescript');
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    ...defaultRules,
    ...typescriptRules,
  },
};
