---
title: Announcing Gulp v5
description: It’s been a long road to gulp 5, but we’re finally here!
image: /img/gulp-5-announcement.jpg
slug: announcing-gulp-5
authors: phated
tags: [JavaScript, Gulp, Gulpjs, Nodejs]
---

![Photo of a small gift wrapped in red paper](/img/gulp-5-announcement.jpg)
_Photo by [Kostiantyn Li](https://unsplash.com/@leekos) on [Unsplash](https://unsplash.com)_

<!-- truncate -->

It’s been a long road to gulp 5, but we’re finally here! This release contains four years worth of work on over 60 projects. Together, the team has closed over 200 issues and pull requests. 🤯

## Streamx

From the very beginning, gulp has been built around streams. In gulp 5, we’ve switched over to [mafintosh’s](https://github.com/mafintosh) excellent [streamx](https://github.com/mafintosh/streamx) library. Streamx has many advantages over Node.js core streams, including handling both object and buffer mode transparently and error handling on the `pipe()` function.

We hope to find time to do more writing about this delightful stream implementation, but most users shouldn’t notice a difference because streamx strives for compatibility with Node.js core streams. We want to thank Mathias for his help and bug fixes throughout the development of gulp 5! Please consider [sponsoring](https://github.com/sponsors/mafintosh) his work.

## Dependencies

A primary focus of this release was reducing our dependency tree and consolidating it to mostly things we maintained. Many dependencies we previously used became unmaintained since gulp 4 was released, so we’ve either removed them or taken on maintenance responsibilities.

The [gulpjs](https://github.com/gulpjs) GitHub organization has grown to over 70 repositories. This fine-grain separation allows us to make small fixes quickly, and many other projects can rely on a subset of our packages. However, the trade-off is that it takes awhile for us to make sweeping changes across the project.

## Breaking changes

It wouldn’t be a SemVer major release without breaking changes. We hope these breaking changes cause little or no problems when users upgrade, but you should be aware of what has changed.

With such a large release, I’m only scraping the surface on the changes here, so please check out both our [combined changelog](https://github.com/gulpjs/gulp/blob/master/CHANGELOG.md#500-2024-03-25) and individual [project changelogs](https://github.com/gulpjs/gulp/blob/master/CHANGELOG.md#individual-changelogs) if you encounter anything that seems different.

### Stream encoding

Our streams now default to UTF-8 encoding. Previously, our streams took whatever data was emitted without considering any encoding. However, in this release, we resolved a 10 year old [issue](https://github.com/gulpjs/vinyl-fs/issues/23) to support custom encodings and we default these to UTF-8. Most usage of gulp won’t need to change anything, but certain plugins may produce non-UTF-8 output and you’ll need to set `{ encoding: false }` on your gulp streams.

### Globs

We’ve also standardized our globbing library across all APIs. Previously, `src()` used the node-glob library and `watch()` used the anymatch library via chokidar. Over the years, we’ve had many issues opened because certain globs didn’t work the same between these functions. As of gulp 5, we consistently use anymatch for glob support.

Additionally, we no longer support “ordered globs”. An “ordered glob” was the ability to apply globs in order, such that a negative glob could be overridden by a positive glob that came later in the array. This isn’t common in other globbing libraries, so all negative globs will filter paths from all positive globs to standardize with the ecosystem. If you need ordered streams, we provide the [ordered-read-streams](https://github.com/gulpjs/ordered-read-streams) library.

### CLI

We’ve added loaders for `swc`, `esbuild`, and `sucrase`. A lot of users asked us to support `.mjs` and `.cjs` extensions, so both of those are available now. In streamlining our dependency tree, we’ve removed a lot of legacy and deprecated loaders. If you were using some of the more obscure loaders we supported, you may need to change to something more modern.

We’ve finally removed the `--verify` flag since we stopped maintaining the plugin banlist a long time ago, and we needed to rename `--require` to `--preload` to avoid conflicting with a Node.js flag.

### Logging

Any plugins using `gulplog` will need to upgrade from v1 to v2 and we’ll emit a deprecation warning if v1 is used.

## Node Support

We’ve long said that gulp is stable software, and we care about supporting as many users as possible. Gulp 4 had an explicit goal of supporting users on Node.js v0.10 because it was widely used at the time of release. Ten years later, the platform has grown and JavaScript has evolved, Node.js now has new stable releases every 6 months with an LTS duration of 30 months on any version. These new versions have features we want to leverage to make gulp better and even more stable, so we’ve dropped support for any version of Node.js below v10.13.0.

Constraining our supported Node.js version has allowed us to drop a lot of platform and JavaScript shims from our dependency tree. A lot of these have gone unmaintained or cause issues to be raised by scanners. We’re still supporting a version of Node.js released in 2018 (and outside of the LTS window) in hope that all our users can upgrade to gulp 5 smoothly.

Finally, we’ve had a fair bit of churn on our infrastructure between v3, v4, and v5 because we have long considered Windows, Mac, and Linux to be priority platforms. It took a long time to find a continuous integration service that consistently supported all these operating systems and was easy to use. We’ve spent considerable time stabilizing our infrastructure around GitHub Actions, which has support for our primary targets and allows us to leverage tools like [release-please](https://github.com/google-github-actions/release-please-action).

## Onward

There is always more work to be done. In the coming weeks, I’ll be triaging our [post-v5 project board](https://github.com/orgs/gulpjs/projects/5/views/1) and creating a discussion for non-breaking follow up work. We plan to keep gulp 5 stable for a while before we begin planning the next major version, which will allow us to patch any problems that come up.

We’re also putting together a survey to get feedback from the broader community. Keep an eye out for our announcement around May.

For now, we hope you enjoy the new release and welcome you to contribute to the project or [sponsor](https://github.com/sponsors/gulpjs) our work!
