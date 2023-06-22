/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.{ts,tsx}"],
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    ".story.js",
    "<rootDir>/coverage",
    "<rootDir>/src/utils",
    "<rootDir>/src/theme",
    "styles.tsx",
    "<rootDir>/src/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':'jest-transform-stub',
    '\\.(yaml)$': 'jest-raw-loader',
  },
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
