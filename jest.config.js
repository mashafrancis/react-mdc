module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  roots: [
    '<rootDir>/packages'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: '<rootDir>/tsconfig.json',
    }
  },
  transform: {
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    // '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text',
    'clover'
  ],
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/**/*.fixtures.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  // resolver: '<rootDir>/resolver.js',
  moduleDirectories: ['utils', 'modules', 'node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/*.ts', 'packages/**/*.tsx'],
  coverageThreshold: {
    global: {
      'branches': 70,
      'functions': 70,
      'lines': 70,
      'statements': 85
    }
  },
  setupFiles: [
    'jest-canvas-mock',
    'jest-localstorage-mock',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
    // '<rootDir>/src/setupMocks.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/tests/utils/setupEnzyme.ts'],
  testEnvironment: 'node'
};
