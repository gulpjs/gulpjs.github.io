'use strict';

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  title: 'gulp.js',
  favicon: 'img/favicon.png',
  url: 'https://gulpjs.com/',
  baseUrl: '/',
  tagline: 'The streaming build system',
  // Used by the deployment
  organizationName: 'gulpjs',
  projectName: 'gulpjs.github.io',
  // The theme
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: 'gulp',
        src: 'img/gulp.svg',
        // TODO: Remove these when we have a homepage in the router
        href: 'https://gulpjs.com/',
        target: '_self',
      },
      links: [
        { to: 'docs/en/getting-started/quick-start',
          label: 'Getting Started',
          position: 'left',
        },
        { to: 'docs/en/api/concepts',
          label: 'API',
          position: 'left',
        },
        { href: 'https://gulpjs.com/plugins',
          label: 'Plugins',
          position: 'left',
        },
        { href: 'https://twitter.com/gulpjs',
          logo: {
            alt: 'Gulp on Twitter',
            src: 'img/twitter.svg',
          },
          position: 'right'
        },
        { href: 'https://medium.com/gulpjs',
          logo: {
            alt: 'The gulp blog',
            src: 'img/medium.svg',
          },
          position: 'right'
        },
      ]
    },
    footer: {
      links: [
        { items: [
            { html: '<img src="/img/gulp-white-logo.svg" alt="gulp" href="/" />' }
          ]
        },
        { title: 'Docs',
          items: [
            { to: 'docs/en/getting-started/quick-start',
              label: 'Getting Started',
            },
            { to: 'docs/en/api/concepts',
              label: 'API',
            },
          ]
        },
        { title: 'Community',
          items: [
            { href: 'https://github.com/gulpjs/gulp',
              label: 'GitHub',
            },
            { href: 'https://stackoverflow.com/questions/tagged/gulp',
              label: 'Stack Overflow',
            },
            { href: 'https://twitter.com/gulpjs',
              label: 'Twitter',
            }
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GulpJS`,
    },
    prism: {
      // One of:
      // dracula, duotoneDark, duotoneLight, github, nightOwl, nightOwlLight,
      // oceanicNext, palenight, shad esOfPurple, ultramin, vsDark
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: {
      apiKey: 'a6ef919bce0b83de1bcbad1d4ef753f8',
      indexName: 'gulpjs',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: 'UA-128126650-1',
    },
    gtag: {
      trackingID: 'UA-128126650-1',
    },
  },
  themes: [
    ['@docusaurus/theme-classic', {
      customCss: require.resolve('./src/css/docs.css')
    }],
    ['@docusaurus/theme-search-algolia', {}]
  ],
  plugins: [
    ['@docusaurus/plugin-content-docs', {
      path: 'docs',
      sidebarPath: require.resolve('./sidebars.json'),
      // This is a holdover because we set up original docusaurus
      // to support translations and v2 doesn't support them yet
      routeBasePath: 'docs/en/',
    }],
    "docusaurus-plugin-sass",
    ['@docusaurus/plugin-content-pages', {}],
    isProd && ['@docusaurus/plugin-google-analytics', {}],
    isProd && ['@docusaurus/plugin-google-gtag', {}],
    isProd && ['@docusaurus/plugin-sitemap', {}],
  ]
};
