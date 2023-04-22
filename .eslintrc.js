module.exports = {
    env: {
        node: true,
        es2020: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
};
