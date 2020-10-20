'use strict';

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  title: 'gulp.js',
  favicon: 'img/favicon.png',
  url: 'https://gulpjs.com/',
  baseUrl: '/',
  tagline: 'A toolkit to automate & enhance your workflow',
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
        href: '/',
        target: '_self',
      },
      links: [
        {
          to: 'docs/en/getting-started/quick-start',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: 'docs/en/api/concepts',
          label: 'API',
          position: 'left',
        },
        {
          to: 'plugins',
          label: 'Plugins',
          position: 'left',
        },
        {
          href: 'https://github.com/sponsors/gulpjs',
          label: 'Donate',
          position: 'left',
        },
        {
          to: 'docs/en/support/for-enterprise',
          label: 'Enterprise',
          position: 'left',
          emphasis: true,
        },
        {
          href: 'https://twitter.com/gulpjs',
          logo: {
            alt: 'Gulp on Twitter',
            src: 'img/twitter.svg',
          },
          position: 'right'
        },
        {
          href: 'https://medium.com/gulpjs',
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
        {
          items: [
            { html: '<img src="/img/gulp-white-logo.svg" alt="gulp" href="/" />' }
          ]
        },
        {
          title: 'Docs',
          items: [
            {
              to: 'docs/en/getting-started/quick-start',
              label: 'Getting Started',
            },
            {
              to: 'docs/en/api/concepts',
              label: 'API',
            },
          ]
        },
        {
          title: 'Community',
          items: [
            {
              href: 'https://github.com/gulpjs/gulp',
              label: 'GitHub',
            },
            {
              href: 'https://stackoverflow.com/questions/tagged/gulp',
              label: 'Stack Overflow',
            },
            {
              href: 'https://twitter.com/gulpjs',
              label: 'Twitter',
            }
          ]
        },
      ],
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
    companyLogos: [
      {
        href: 'https://stickermule.com',
        src: 'sponsor-logos/sticker-mule.svg',
        alt: 'Sticker Mule logo',
        title: 'Sticker Mule',
        style: {
          flexBasis: '120px',
        },
      },
      {
        href: 'https://icons8.com/',
        src: 'sponsor-logos/icons8.svg',
        alt: 'Icons8 logo',
        title: 'Icons8',
        style: {
          flexBasis: '80px',
        },
      },
      {
        href: 'https://frontendmasters.com/',
        src: 'sponsor-logos/frontend-masters.png',
        alt: 'Frontend Masters logo',
        title: 'Frontend Masters',
        style: {
          flexBasis: '200px',
        },
      },
      {
        href: 'https://www.codeinwp.com/',
        src: 'sponsor-logos/codeinwp.svg',
        alt: 'CodeinWP',
        title: 'CodeinWP',
        style: {
          flexBasis: '150px',
        },
      },
      {
        href: 'https://clay.global/',
        src: 'sponsor-logos/clay.png',
        alt: 'Clay logo',
        title: 'Clay',
        style: {
          flexBasis: '150px',
        },
      },
      {
        href: 'https://twitter.com/chromiumdev',
        src: 'sponsor-logos/chrome.svg',
        alt: 'Chrome logo',
        title: 'Chrome Developers',
        style: {
          flexBasis: '80px',
        },
      },
    ]
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&family=Roboto:wght@900&display=swap'
  ],
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
