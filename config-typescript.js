'use strict';

module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'jsdoc/require-jsdoc': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true,
      'overrides': {
        'arrow': {
          'before': true,
        },
      },
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'multilineDetection': 'brackets',
    }],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  },
};
