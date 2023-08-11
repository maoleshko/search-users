module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['webpack.*.js'],
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    jsx: true
  }
}
