---
title: "🎉 Version 4.0 Now Default 🎉"
description: Today, gulp v4 is being promoted from “next” to “latest” which means it will be installed by default when you run “npm install gulp”.
image: /img/gulp-4-now-default.png
slug: gulp-4-now-default
authors: janiceilene
tags: [JavaScript, Gulp, Gulpjs]
---

![Screenshot of gulp's npm website showing 4.0.0 as the latest version](/img/gulp-4-now-default.png)

For the past year, version 4.0 has been [published to npm](https://www.npmjs.com/package/gulp) and could be installed using `npm install gulp@next`. Today, it’s being promoted from “next” to “latest” which means it will be installed by default when you run `npm install gulp`. With this, all previous versions are _soft_ deprecated and will become _hard_ deprecated in the coming months.

<!-- truncate -->

## What’s new in 4.0?!

* The task system was rewritten from the ground-up, allowing task composition using `series()` and `parallel()` methods
* The watcher was updated, now using chokidar (no more need for gulp-watch!), with feature parity to our task system
* First-class support was added for incremental builds using `lastRun()`
* A `symlink()` method was exposed to create symlinks instead of copying files
* Built-in support for sourcemaps was added — the gulp-sourcemaps plugin is no longer necessary!
* Task registration of exported functions — using node or ES exports — is now recommended
* Custom registries were designed, allowing for shared tasks or augmented functionality
* Stream implementations were improved, allowing for better conditional and phased builds

We’ve written a new [Getting Started guide](/docs/en/getting-started/quick-start) and [API docs](/docs/en/api/concepts) to smooth the transition between versions. We hoped to have updated recipes, advanced topics, and a migration guide written before this release, but have yet to secure funding to finish them.

If your company is interested in funding the future of gulp documentation, [let us know](mailto:team@gulpjs.com)!
