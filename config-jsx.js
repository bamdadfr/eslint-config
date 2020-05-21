'use strict'

module.exports = {
    "extends": [
        "./config-js.js",
        "eslint:recommended",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react",
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "jsx-a11y",
        "prettier"
    ],
    "rules": {
        "react/jsx-indent": ["error", 4],
        "react/prop-types": "off"
    }
}