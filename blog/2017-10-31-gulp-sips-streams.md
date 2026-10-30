---
title: "Gulp Sips: How We Use Streams"
description: Explanation and tips for gulp streams.
image: /img/gulp-sips-streams.png
slug: gulp-sips-streams
authors: janiceilene
tags: [JavaScript, Gulp Sips, Gulp, Gulpjs, Streams]
---

![Gulpfile showing many streams piped together](/img/gulp-sips-streams.png)
_Plugins strictly spooky._

<!-- truncate -->

_This is part of our Gulp Sips series: bringing you easily-digestible bits of information on our advanced or unknown features._

## Two Types of Streams

In Node, streams can operate in one of two modes; for the purposes of gulp, the two modes are incompatible.

* Buffer mode: Operates exclusively on buffered data. If we stream a file in this mode, it would only contain the content of the file. We’d even lose the filename.
* Object mode: Accepts any object flowing through it. A file streamed in object mode can contain all sorts of metadata (filename, stats, etc.), along with the content.

## Benefits of Object Mode

In buffer mode, using something like `fs.createReadStream('index.js')`, you’d have to operate on a singular file.

Instead, we utilize streams in object mode so we can operate on multiple files using a single stream. For example, `gulp.src('*.js')` reads all files ending in `.js` and emits each as an object on the stream.

For every file, we track a lot of metadata along with the content. This allows plugins to operate upon any of that metadata before we write it out to disk.

There are ways to convert between types, but they require external modules, like [vinyl-source-stream](https://www.npmjs.com/package/vinyl-source-stream).

## Utilizing Gulp Plugins

Every gulp plugin should be a Transform stream in object mode. These streams understand and operate on gulp’s data, while streams operating in buffer mode would throw an error.

Generally, a gulp stream begins with `gulp.src()` and terminates with `gulp.dest()`. For best results, streams between should be a gulp plugin or a stream that understands [Vinyl](https://github.com/gulpjs/vinyl#what-is-vinyl) objects.
