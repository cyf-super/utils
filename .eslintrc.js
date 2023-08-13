/** @type import('./node_modules/@types/eslint/index').Linter.Config */
module.exports = {
  overrides: [
    {
      ...require('./.eslintrc.js.js'),
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
  },
}
