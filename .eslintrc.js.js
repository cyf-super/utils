module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    // sourceType: "module",
    parser: '@typescript-eslint/parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'simple-import-sort', 'jshow', '@typescript-eslint', 'unused-imports'],
}
