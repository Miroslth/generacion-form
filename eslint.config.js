import prettier from 'eslint-plugin-prettier';

export default [
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
