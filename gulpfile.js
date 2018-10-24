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
const outDirectory = 'converted-docs';

const fmOptions = {
  delimiters: ['<!-- front-matter', '-->']
};

function fetchDocs() {
  return download(owner, repo, directory, { sha: "master" });
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
  if (!config.data.id) {
    console.error(`File missing front-matter. Path: ${file.path}`);
    return; // Filter out any file without frontmatter
  }

  file.contents = Buffer.from(config.stringify());

  return file;
}

function pluginless(fn) {
  return through2.obj(handler);

  function handler(file, _, cb) {
    try {
      cb(null, fn(file));
    } catch(err) {
      cb(err);
    }
  }
}
