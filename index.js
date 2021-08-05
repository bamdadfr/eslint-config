'use strict'

module.exports = {
    'overrides': [
        {
            'extends': [
                './config.js',
            ],
            'files': [
                '*.js',
                '*.jsx',
            ],
        },
        {
            'extends': [
                './config.js',
                './config-typescript.js',
            ],
            'files': [
                '*.ts',
                '*.tsx',
            ],
        },
    ],
}