module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    /* 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript', */
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  overrides: [
    /* {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
*/
    {
      // only for TypeScript files
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false,
      },
    ],
  },
};
