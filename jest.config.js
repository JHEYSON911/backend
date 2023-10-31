/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageDirectory: "coverage",
};

module.exports = config;
