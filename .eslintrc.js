module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': [
      'error',
      { allow: ['tron'] }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' }
    ]
  },
  settings: {
    'import/resolver': {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
