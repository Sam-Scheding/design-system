
const config = {
  stories: ["../src/components/**/stories.tsx"],
  addons: [
  "@storybook/addon-docs",
  "@storybook/addon-onboarding",
  "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../public"],
};

export default config;