// This file is only for generating the docs
// No need to use any of this if working on the main website
import { deleteAsync } from 'del';
import gulplog from 'gulplog';
import { series } from 'gulp';
import frontMatter from 'gray-matter';
import { Downloader } from 'github-download-directory';
import { dirname } from 'path';
import { mkdir, writeFile } from 'fs/promises';

// Exports for task registration
export default series(clean, generateDocs);

const owner = 'gulpjs';
const repo = 'gulp';
const directory = 'docs';

const fmOptions = {
  delimiters: ['<!-- front-matter', '-->']
};

async function clean() {
  return deleteAsync(directory);
}

async function createDirectories(filepath) {
  var dir = dirname(filepath);
  return mkdir(dir, { recursive: true });
}

async function output(file) {
  await createDirectories(file.path);
  await writeFile(file.path, file.contents);
}

async function generateDocs() {
  const download = new Downloader({
    github: {
      auth: process.env.GITHUB_TOKEN
    }
  });
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
  await Promise.all(docusaurusFiles.map(output))
}
