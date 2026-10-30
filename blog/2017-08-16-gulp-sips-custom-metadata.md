---
title: "Gulp Sips: Custom Task Metadata"
description: Task descriptions and flags.
image: /img/gulp-sips-custom-metadata.png
slug: gulp-sips-custom-metadata
authors: janiceilene
tags: [JavaScript, Gulp Sips, Gulp, Gulpjs, Command Line]
---

![Gulp help message displayed in terminal](/img/gulp-sips-custom-metadata.png)

_This is part of our Gulp Sips series: bringing you easily-digestible bits of information on our advanced or unknown features._

<!-- truncate -->

## Descriptions and Flags

Our users frequently requested the ability to add descriptions to their gulp tasks. The suggested solution was to add a method like `gulp.description()`; however, we didn’t want to expand our API surface and wanted to support documenting custom flags.

We searched for a more elegant solution and found the most flexible option was attaching static properties to task functions containing the custom metadata. So, you can leverage existing language features instead of custom APIs. It also allows us to support other types of metadata in the future.

## Supported Properties

* `.description`: Assign a string description to your task function.

```js
function clean() { … }
clean.description = 'Cleans up generated files.';
```

* `.flags`: Assign an object of flags to your task function. Each key should be a flag and its value should be the description of that flag.

```js
function build() { … }
build.flags = {
  '--prod': 'Builds in production mode.'
};
```

## Put It All Together

Before you get started, ensure that you are using gulp-cli as described in this previous [Sip](/blog/gulp-sips-cli).

You’ll want your gulpfile to look similar to this:

```js
var gulp = require('gulp');
function build() { … }
build.description = 'Build entire project.';
build.flags = {
  '—-prod': 'Builds in production mode (minification, etc).'
};
//If you are using gulp 3.x:
gulp.task('build', build);
//Or if you’ve updated to gulp 4.x
gulp.task(build);
```

Now run `gulp --tasks` to see your descriptions and flags. It should look somewhat like the screenshot above the title!
