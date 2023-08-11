// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loops & Logic',
  tagline: 'A low-code template system for WordPress',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.loopsandlogic.com'
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tangible', // Usually your GitHub org/user name.
  projectName: 'loops-and-logic', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bitbucket.org/tangibleinc/docusaurus-loops-and-logic/src/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://bitbucket.org/tangibleinc/docusaurus-loops-and-logic/src/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Loops & Logic',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'gettingStarted',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'learningGuides',
            position: 'left',
            label: 'Learning Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceGuides',
            position: 'left',
            label: 'Reference Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'howToGuides',
            position: 'left',
            label: 'How-to Guides',
          },
          {
            href: 'https://discourse.tangible.one',
            label: 'Forum',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/getting-started/quick-start',
              },
              {
                label: 'Loop Tag',
                to: '/docs/learning-guides/dynamic-tags/loop/',
              },
              {
                label: 'If Tag',
                to: '/docs/learning-guides/dynamic-tags/if/',
              },
              {
                label: 'Set and Get Tags',
                to: '/docs/learning-guides/dynamic-tags/set-get',
              },
              {
                label: 'Using ACF Fields',
                to: '/docs/learning-guides/integrations/acf',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://discourse.tangible.one',
              },
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/loopsandlogic',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Learn More',
                href: 'https://loopsandlogic.com/',
              },
              {
                label: 'Blog',
                href: 'https://loopsandlogic.com/blog/',
              },
              {
                label: 'Tangible Blocks Beta',
                href: 'https://loopsandlogic.com/tangible-blocks/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Loops & Logic by Tangible Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '76KC6U65DT',
        apiKey: 'e37a68f78cc633ffe054a7b4ef5b11e5',
        indexName: 'docusaurus-2',
        contextualSearch: true,
      }
    }),
    
};

module.exports = config;