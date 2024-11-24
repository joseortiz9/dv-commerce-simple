module.exports = {
  extends: [],
  plugins: [
    '@nrwl/nx',
    'lodash',
    'regex',
    'i18next',
  ],
  ignorePatterns: ['apps/expo-app-*/android/**', 'apps/expo-app-*/ios/**'],
  settings: {},
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'lodash/import-scope': 'error', // Import individual lodash methods with module path for minimizing bundle size,
    'import/dynamic-import-chunkname': 'error',
  },
  overrides: [
    {
      files: ['scripts/*.[jt]s'],
      rules: {
        'no-await-in-loop': 'off',
        'no-console': 'off',
        'no-restricted-syntax': 'off',
        'security/detect-non-literal-fs-filename': 'off',
      },
    },
    {
      files: [
        '**/expo-app-*/**/*.[jt]s?(x)',
        'libs/native-core-framework/src/**/*.ts*',
      ],
      rules: {
        'react/no-array-index-key': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['**/expo-app/**/*.[jt]s?(x)', 'libs/native-core-*/src/**/*.ts*'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    },
    // Disable import/no-extraneous-dependencies for expo-app as it doesn't work with the separate generated app package.json
    {
      files: ['**/expo-app-*/**/*.ts*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
