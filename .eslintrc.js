module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // Eslint's own recommended rules, minimal set of best practices
    'plugin:prettier/recommended', // Disable eslint's rules about code style and use prettier styles
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
  ],
  rules: {
    'react/prop-types': 0,
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
