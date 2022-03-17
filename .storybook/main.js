module.exports = {
  stories: [
    "../src/stories/React-Image-Selector.stories.mdx",
    "../src/stories/Button.stories.mdx",
  // "../src/**/*.stories.mdx",
  // "../src/**/*.stories.@(js|jsx|ts|tsx)"
],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    // "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public", { from: "../src/stories/assets", to: "/assets" }],
};
