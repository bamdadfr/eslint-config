'use strict'

module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'rules': {
        'no-use-before-define': 'off',
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
                'delimiter': 'none',
                'requireLast': false,
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': false,
            },
            'multilineDetection': 'brackets',
        }],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    },
}