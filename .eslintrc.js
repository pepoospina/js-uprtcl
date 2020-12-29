module.exports = {
  root: true,
  reportUnusedDisableDirectives: false,
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['node', 'lit'],
  settings: {
    node: {
      allowModules: ['@webpack-cli/generators', '@webpack-cli/utils']
    }
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-process-exit': 'off',
    'no-template-curly-in-string': 'error',
    'no-caller': 'error',
    'no-extra-bind': 'error',
    'no-loop-func': 'error',
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    'no-empty': 'off',
    'no-redeclare': 'off',
    'no-fallthrough': 'off',
    'no-useless-escape': 'off',
    'no-async-promise-executor': 'off',
    'prettier/prettier': 'off',

    'node/no-unpublished-require': 'off',
    'node/no-missing-require': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-require': 'off'
  },
  overrides: [
    {
      settings: {
        node: {
          tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        }
      },
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-deprecated-api': 'off',
        'prefer-const': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-types': 0
      }
    }
  ]
};
