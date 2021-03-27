module.exports = {
    extends: ['@react-native-community', 'plugin:typescript-sort-keys/recommended'],
    globals: {
        Intl: true,
        jest: true,
    },
    plugins: ['prettier', 'simple-import-sort'],
    root: true,
    rules: {
        '@typescript-eslint/no-unused-vars': 2,
        'simple-import-sort/exports': 2,
        'simple-import-sort/imports': 2,
        'sort-keys': 2,
    },
};
