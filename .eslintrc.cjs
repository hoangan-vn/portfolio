module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        useTabs: false,
        printWidth: 120
      }
    ]
  }
};
