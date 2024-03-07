module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "eslint-plugin-react",
        'jsx-a11y',
        'prettier',
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        'prettier/prettier': 'error',
        "indent": ["error", 2],
        "quotes": ["error", "single", { "avoidEscape": true }],
        "semi": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "jsx-quotes": ["error", "prefer-single"],
        "no-extra-semi": "error",
        "space-infix-ops": "error",
        "no-trailing-spaces": "error",
        "space-before-blocks": "error",
        "no-multi-spaces": "error",
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": "error",
        "comma-spacing": "error",
        "semi-spacing": "error",
        "no-whitespace-before-property": "error",
        "computed-property-spacing": "error",
        "react/jsx-curly-spacing": ["error", {"when": "never"}]

    }
}
