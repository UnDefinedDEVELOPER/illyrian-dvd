const postcssPresetEnv = require("postcss-preset-env");
const tailwind = require("tailwindcss");

module.exports = {
  plugins: {
    "postcss-preset-env": {
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-selectors": { preserve: true },
      },
    },
    'tailwindcss/nesting': 'postcss-nesting',
    "tailwindcss": {},
  },
};
