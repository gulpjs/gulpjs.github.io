'use strict';

// This file is only for generating the docs
// No need to use any of this if working on the main website

const { src, dest, series } = require('gulp');
const path = require('path');
const pump = require('pump');
const through2 = require('through2');
const frontMatter = require('gray-matter');
const download = require('github-download-directory');

// Exports for task registration
exports.default = series(fetchDocs, convertComments);

const owner = 'gulpjs';
const repo = 'gulp';
const directory = 'docs';
const outDirectory = 'converted-docs';

const fmOptions = {
  delimiters: ['<!-- front-matter', '-->']
};

function fetchDocs() {
  return download(owner, repo, directory, { sha: "wip-docs" });
}

function convertComments(cb) {
  pump([
    // Only process markdown files in the directory we fetched
    src('**/*.md', { cwd: directory }),
    pluginless(convertToDocusaurus),
    // Overwrite the markdown files we fetched
    dest(outDirectory)
  ], cb)
}

/* utils */
function convertToDocusaurus(file) {
  var config = frontMatter(file.contents, fmOptions);
  // This fixes the problem with more than 1 file being named README.md
  if (config.data.id) {
    file.stem = config.data.id;
  } else {
    // This can probable be removed when we ensure all markdown files have frontmatter
    // TODO: We should log files that fall into here
    var dirAsStem = path.basename(file.dirname);
    file.stem = dirAsStem;
  }
  file.base = path.dirname(file.path);

  file.contents = Buffer.from(config.stringify());
}

function pluginless(fn) {
  return through2.obj(handler);

  function handler(file, _, cb) {
    try {
      fn(file);
      cb(null, file);
    } catch(err) {
      cb(err);
    }
  }
}
