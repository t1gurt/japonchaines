module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // 本番用にエラーを無効化
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
};
