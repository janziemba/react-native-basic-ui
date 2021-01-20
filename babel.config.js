module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@ui': './src/ui',
                },
            },
            '@babel/plugin-proposal-class-properties',
        ],
    ],
};
