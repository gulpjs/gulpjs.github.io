const siteConfig = {
  disableHeaderTitle: true,
  disableHeaderTagline: true,
  title: 'gulp.js',
  tagline: 'The streaming build system',
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
    // {search: true},
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
    apiKey: 'a6ef919bce0b83de1bcbad1d4ef753f8',
    indexName: 'gulpjs',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  gaGtag: true,
  gaTrackingId: 'UA-128126650-1',
};

module.exports = siteConfig;
