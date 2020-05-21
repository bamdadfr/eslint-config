'use strict'

module.exports = {
    "extends": [
        "./config-js.js"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "jsx-a11y",
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
        "import/extensions": "off"
    }
}