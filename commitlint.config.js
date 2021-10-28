module.exports = {
  extends: ['@commitlint/config-lerna-scopes', '@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'chore', 'refactor', 'test', 'chore', 'issue']
    ]
  }
}
