const config = {
  endOfLine: 'lf',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/utils/(.*)$',
    '^@/hooks/(.*)$',
    '^@/routes/(.*)$',
    '^@/services/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/features/(.*)$',
    '',
    '^[./]',
  ],
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};

export default config;
