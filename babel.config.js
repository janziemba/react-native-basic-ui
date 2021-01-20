module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@ui': './src',
                },
            },
            '@babel/plugin-proposal-class-properties',
        ],
    ],
};
