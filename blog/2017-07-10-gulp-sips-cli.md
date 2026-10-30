---
title: "Gulp Sips: New Command Line Interface"
description: A Standalone CLI.
image: /img/gulp-sips-cli-help.png
slug: gulp-sips-cli
authors: janiceilene
tags: [JavaScript, Gulp Sips, Gulp Gulpjs, Command Line]
---

![Gulp help message displayed in terminal](/img/gulp-sips-cli-help.png)

<!-- truncate -->

_This is part of our Gulp Sips series: bringing you easily-digestible bits of information on our advanced or unknown features._

## A Standalone CLI

Traditionally, you’ve run your tasks using the `gulp` command installed by the main gulp package on npm. However, we’ve moved away from coupling the CLI and library together. The CLI now lives in the `gulp-cli` [package](https://www.npmjs.com/package/gulp-cli).

## But why?

This was set into motion because we needed to support versions 3 & 4 (upcoming), even though the two were vastly different. An added benefit is a reduction in the size of global installation.

We were also able to version separately from the main package, allowing for features and bug fixes without impacting your workflow. Many of those features will be topics of upcoming Sips, including adding custom metadata to tasks and utilizing configuration files.

## Use it now!

If you’ve globally installed gulp before, you’ll want to remove the old version. To check your version, run:

```sh
gulp -v
```

![Gulp version message displayed in terminal](/img/gulp-sips-cli-versions.png)

If you don’t see `CLI Version 1.x` (as shown above), remove your old installation by running:

```sh
npm rm --global gulp
```

Now, you can install the standalone CLI using:

```sh
npm install --global gulp-cli
```

Run `gulp -v` again. Everything should match the screenshot above.
