module.exports = {
    title: 'React Native Basic UI',
    tagline:
        'Easy to use UI components for React Native. Creating an app has never been easier! 🎉',
    url: 'https://janziemba.github.io/react-native-basic-ui',
    baseUrl: '/react-native-basic-ui/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'janziemba', // Usually your GitHub org/user name.
    projectName: 'react-native-basic-ui', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'React Native Basic UI',
            logo: {
                alt: 'React Native Basic UI logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'getting-started/installation',
                    activeBasePath: 'getting-started',
                    label: 'Getting started',
                    position: 'left',
                },
                {
                    to: 'components/button',
                    activeBasePath: 'components',
                    label: 'Components',
                    position: 'left',
                },
                {
                    to: 'faq',
                    activeBasePath: 'faq',
                    label: 'FAQ',
                    position: 'left',
                },
                {
                    href: 'https://github.com/janziemba/react-native-basic-ui',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting started',
                            to: 'getting-started/installation',
                        },
                        {
                            label: 'Components',
                            to: 'components/button',
                        },
                        {
                            label: 'FAQ',
                            to: 'faq',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Github Discussions',
                            href: 'https://github.com/janziemba/react-native-basic-ui/discussions',
                        },
                        {
                            label: 'Stack Overflow',
                            href:
                                'https://stackoverflow.com/questions/tagged/react-native-basic-ui',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/janziemba/react-native-basic-ui',
                        },
                        {
                            label: 'Jan Ziemba — React Native developer',
                            href: 'https://react-native.cz',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Jan Ziemba`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    editUrl:
                        'https://github.com/janziemba/react-native-basic-ui/edit/master/website/',
                    path: '../docs',
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
                    ],
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
            },
        ],
    ],
};
