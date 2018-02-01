'use strict';

// This file is only for generating the docs
// No need to use any of this if working on the main website

const { src, dest, series } = require('gulp');
const pump = require('pump');
const through2 = require('through2');
const frontMatter = require('gray-matter');
const download = require('github-download-directory');

// Exports for task registration
exports.default = series(fetchDocs, convertComments);

const owner = 'gulpjs';
const repo = 'gulp';
const directory = 'docs';

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
    pluginless(convertFrontMatter),
    // Overwrite the markdown files we fetched
    dest(directory)
  ], cb)
}

/* utils */
function convertFrontMatter(file) {
  return frontMatter(file, fmOptions).stringify();
}

function pluginless(fn) {
  return through2.obj(handler);

  function handler(file, _, cb) {
    try {
      var contents = fn(file);
      file.contents = Buffer.from(contents);
      cb(null, file);
    } catch(err) {
      cb(err);
    }
  }
}
