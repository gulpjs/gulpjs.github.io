'use strict';

const {themes} = require('prism-react-renderer');

const isProd = process.env.NODE_ENV === 'production';

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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'gulp',
        src: 'img/gulp.svg',
        href: '/',
        target: '_self',
      },
      items: [
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
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/sponsors/gulpjs',
          label: 'Donate',
          position: 'left',
          className: 'emphasis',
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
              href: 'https://github.com/orgs/gulpjs/discussions',
              label: 'Discussions',
            }
          ]
        },
      ],
    },
    prism: {
      // One of:
      // dracula, duotoneDark, duotoneLight, github, nightOwl, nightOwlLight,
      // oceanicNext, palenight, shad esOfPurple, ultramin, vsDark
      theme: themes.vsDark,
    },
    algolia: {
      appId: 'HQ9BYTRO7N',
      apiKey: 'e0f1bf55fa3f4fb5150c708638b02e22',
      indexName: 'gulpjs',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    companyLogos: [
      // Stopped donating on April 1, 2020
      // {
      //   href: 'https://stickermule.com',
      //   src: 'sponsor-logos/sticker-mule.svg',
      //   alt: 'Sticker Mule logo',
      //   title: 'Sticker Mule',
      //   style: {
      //     flexBasis: '120px',
      //   },
      // },
      {
        href: 'https://icons8.com/',
        src: 'sponsor-logos/icons8.svg',
        alt: 'Icons8 logo',
        title: 'Icons8',
        style: {
          flexBasis: '80px',
        },
      },
      // Stopped donating on ??
      // {
      //   href: 'https://frontendmasters.com/',
      //   src: 'sponsor-logos/frontend-masters.png',
      //   alt: 'Frontend Masters logo',
      //   title: 'Frontend Masters',
      //   style: {
      //     flexBasis: '200px',
      //   },
      // },
      // Stopped donating on October 1st, 2025
      // {
      //   href: 'https://www.codeinwp.com/',
      //   src: 'sponsor-logos/codeinwp.svg',
      //   alt: 'CodeinWP',
      //   title: 'CodeinWP',
      //   style: {
      //     flexBasis: '150px',
      //   },
      // },
      // Stopped donating on May 2nd, 2020
      // {
      //   href: 'https://clay.global/',
      //   src: 'sponsor-logos/clay.png',
      //   alt: 'Clay logo',
      //   title: 'Clay',
      //   style: {
      //     flexBasis: '150px',
      //   },
      // },
      // Stopped donating on ??
      // {
      //   href: 'https://twitter.com/chromiumdev',
      //   src: 'sponsor-logos/chrome.svg',
      //   alt: 'Chrome logo',
      //   title: 'Chrome Developers',
      //   style: {
      //     flexBasis: '80px',
      //   },
      // },
      // Stopped donating in Sept 2023
      // {
      //   href: 'https://word.tips/',
      //   src: 'sponsor-logos/word-tips.png',
      //   alt: 'WordTips logo',
      //   title: 'WordTips',
      //   style: {
      //     flexBasis: '150px',
      //   },
      // },
      // Stopped donating on March 6th, 2025
      // {
      //   href: 'https://developer.americanexpress.com',
      //   src: 'sponsor-logos/american-express.svg',
      //   alt: 'American Express',
      //   title: 'American Express',
      //   style: {
      //     flexBasis: '145px',
      //   },
      // },
      // Partnership ended in June 2024
      // {
      //   href: 'https://webweekly.email/',
      //   src: 'sponsor-logos/web-weekly.svg',
      //   alt: 'Web Weekly - Your friendly web dev newsletter',
      //   title: 'Web Weekly - Your friendly web dev newsletter',
      //   style: {
      //     flexBasis: '175px',
      //   }
      // }
    ],
    blog: {
      sidebar: {
        groupByYear: false
      }
    }
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
    ['@docusaurus/plugin-content-blog', {
      blogSidebarCount: 'ALL',
      blogDescription: 'Curated articles for our community.',
      blogSidebarTitle: 'All posts'
    }],
    ['@docusaurus/plugin-content-docs', {
      path: 'docs',
      sidebarPath: require.resolve('./sidebars.json'),
      // This is a holdover because we set up original docusaurus
      // to support translations and v2 doesn't support them yet
      routeBasePath: 'docs/en/',
    }],
    ['@docusaurus/plugin-content-pages', {}],
    isProd && ['@docusaurus/plugin-sitemap', {}],
  ]
};
