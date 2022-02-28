const path = require("path");
const { alias } = require("react-app-rewire-alias");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "@components/*": ["./src/components/*"],
          "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"],
        },
      },
    },
  },
  webpack: (config, env) => {
    alias({
      "@components": "./src/components",
      "@modules": "./src/modules",
      "@assets": "./src/assets",
      "@api": "./src/api",
    })(config);

    return config;
  },
};
