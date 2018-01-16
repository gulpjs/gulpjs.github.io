/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Sticker Mule',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F50d34300-e719-11e6-8f71-e12ba1ad8ee3.png&height=96',
    infoLink: 'https://stickermule.com/',
    pinned: true,
  },
  {
    caption: 'Craftcms',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F8e9cfe00-25ae-11e7-8c00-677620cd0201.png&height=96',
    infoLink: 'https://craftcms.com/',
    pinned: true,
  },
  {
    caption: 'Clay',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F09d57c90-637c-11e7-9ed2-bfa12b0351e8.jpg&height=96',
    infoLink: 'http://clay.global/',
    pinned: true,
  },
  {
    caption: 'keycdn',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F24fe4860-cb0c-11e7-a280-4f57b80ade52.png&height=96',
    infoLink: 'https://www.keycdn.com/',
    pinned: true,
  },
  {
    caption: 'UnixStickers',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2Funixstickerscom_585978f0-8c15-11e7-9cb4-07796fd41740.png&height=96',
    infoLink: 'http://www.unixstickers.com/',
    pinned: true,
  },
  {
    caption: 'MarchBox',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2Fimagejpeg_2e64cf80-4342-11e6-b78c-1f0f6e5a6257.jpeg&height=96',
    infoLink: 'http://marchbox.com/',
    pinned: true,
  },
  {
    caption: 'MixMax',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2Ffcf6c0d0-f730-11e7-af8c-05ca2e1ddbda.png&height=96',
    infoLink: 'http://mixmax.com/',
    pinned: true,
  },
  {
    caption: 'Icons8',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F2d6b4a00-1709-11e7-9b5a-89d03aeb3ad4.png&height=96',
    infoLink: 'https://icons8.com/',
    pinned: true,
  },
  {
    caption: 'OpenCollective',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F130370ac0dd54678af687cc06f5e3f11_41032e40-8061-11e7-a43c-33b9b6f82c7f.png&height=96',
    infoLink: 'https://opencollective.com/lgroothuijsen',
    pinned: true,
  },
  {
    caption: 'CodeInWP.blog',
    image: 'https://opencollective.com/proxy/images/?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2Fad97b5c0-0f19-11e8-bedc-5dca82356013.png&height=96',
    infoLink: 'https://www.codeinwp.com/blog/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'GulpJS Docs' /* title for your website */,
  tagline: 'How to get started using GulpJS',
  url: 'https://gulpjs.github.io/docs' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  customDocsPath: 'converted-docs',
  projectName: 'GulpJS Docs',
  customDocsPath: 'converted-docs',
  headerLinks: [
    {doc: 'getting-started', label: 'Get Started'},
    {doc: 'api', label: 'API'},
    {doc: 'faq', label: 'FAQ'},
    {doc: 'cli', label: 'CLI'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/gulp.svg',
  footerIcon: 'img/gulp.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#CF4647',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' GulpJS',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'tomorrow-night',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/gulpjs/gulp',
  markdownPlugins: [
    commentOutHeading
  ]
};

module.exports = siteConfig;

/* Utils */
function commentOutHeading(md) {
  var ogHeadingOpen = md.renderer.rules.heading_open;
  var ogHeadingClose = md.renderer.rules.heading_close;

  var waitingForClose = false;

  md.renderer.rules.heading_open = function(tokens, idx /*, options, env */) {
    if (tokens[idx].hLevel === 1 && idx === 0) {
      waitingForClose = true;
      return '<!-- ';
    }
    return ogHeadingOpen.apply(this, arguments);
  };

  md.renderer.rules.heading_close = function(tokens, idx /*, options, env */) {
    if (tokens[idx].hLevel === 1 && waitingForClose) {
      waitingForClose = false;
      return ' -->';
    }
    return ogHeadingClose.apply(this, arguments);
  };
}
