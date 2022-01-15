module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:security/recommended",
    "plugin:import/typescript",
    "prettier", // <- keep prettier as last item in extends property.
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "security"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      { ts: "never", tsx: "never" },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": "off",
  },
};
