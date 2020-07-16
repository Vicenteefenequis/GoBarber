module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
