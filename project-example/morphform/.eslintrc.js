module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    quotes: ["warn", "double"],
    "space-before-function-paren": "off",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
}
