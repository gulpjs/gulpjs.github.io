'use strict';

// This file is only for generating the docs
// No need to use any of this if working on the main website
const del = require('del');
const gulplog = require('gulplog');
const { series } = require('gulp');
const frontMatter = require('gray-matter');
const download = require('github-download-directory');

// Exports for task registration
exports.default = series(clean, generateDocs);

const owner = 'gulpjs';
const repo = 'gulp';
const directory = 'docs';

const fmOptions = {
  delimiters: ['<!-- front-matter', '-->']
};

async function clean() {
  return del(directory);
}

async function generateDocs() {
  // Fetch
  const files = await download.fetchFiles(owner, repo, directory, { sha: "master" });

  // Process
  const docusaurusFiles = files.reduce((result, {path, contents}) => {
    const config = frontMatter(contents, fmOptions);
    if (!config.data.id) {
      gulplog.debug(`File missing front-matter. Path: ${path}`);
      return result;
    }

    return result.concat({
      path,
      contents: Buffer.from(config.stringify())
    });
  }, []);

  // Write
  await Promise.all(docusaurusFiles.map(download.output))
}
