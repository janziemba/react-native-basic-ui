module.exports = {
    branches: ['master'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
            },
        ],
    ],
};
