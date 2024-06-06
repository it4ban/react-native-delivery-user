module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^@/assets/(.*)&',
    '^@/components/(.*)&',
    '^@/constants/(.*)&',
    '^@/navigations/(.*)&',
    '^@/screens/(.*)&',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
