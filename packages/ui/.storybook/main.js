module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
}
