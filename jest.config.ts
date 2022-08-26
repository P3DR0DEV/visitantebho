export default {
  coverageProvider: "v8",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
