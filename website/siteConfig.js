const siteConfig = {
  disableHeaderTitle: true,
  disableHeaderTagline: true,
  url: 'https://gulpjs.com/',
  baseUrl: '/',
  customDocsPath: 'converted-docs',
  organizationName: 'gulpjs',
  projectName: 'gulpjs.github.io',
  headerLinks: [
    {doc: 'getting-started/quick-start', label: 'Getting Started'},
    {doc: 'api/concepts', label: 'API'},
    {href: 'https://gulpjs.com/plugins', label: 'Plugins'},
    {href: 'https://twitter.com/gulpjs', label: 'Twitter'},
    {href: 'https://github.com/gulpjs/gulp/blob/master/CONTRIBUTING.md', label: 'Contribute'},
    {search: true},
  ],
  headerIcon: 'img/gulp.svg',
  footerIcon: 'img/gulp.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#cf4647',
    secondaryColor: '#cf4647',
  },
  copyright: `Copyright © ${new Date().getFullYear()} GulpJS`,
  highlight: {
    theme: 'tomorrow-night',
  },
  separateCss: ['static/css'],
  onPageNav: 'separate',
  cleanUrl: true,
  useEnglishUrl: true,
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/gulpjs/gulp',
  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
