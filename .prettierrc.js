/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
  printWidth: 100
};

module.exports = config;