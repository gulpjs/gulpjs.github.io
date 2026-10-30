---
title: Interview with Blaine Bublitz
description: With the release of gulp 4, I thought you all might be interested in hearing about it from the lead maintainer!
image: /img/blaine-interview.jpg
slug: inteview-with-blaine-bublitz
authors: janiceilene
tags: [JavaScript, Gulp, Gulpjs, Open Collective, Open Source]
---

With the release of gulp 4, I thought you all might be interested in hearing about it from the lead maintainer!

![Blaine posing at Machu Picchu](/img/blaine-interview.jpg)

<!-- truncate -->

__Congratulations on the Gulp release! What would you say your favorite feature is?__

Thanks!

Oh, wow — there’s just so much! Most people will really enjoy and benefit from `gulp.series` and `gulp.parallel`; however, I really like [exporting tasks](https://github.com/gulpjs/gulp#sample-gulpfilejs) and [incremental builds](https://github.com/gulpjs/gulp#incremental-builds).

I’m going to be giving a talk in February about all the new features; watch the gulp [twitter](https://twitter.com/gulpjs) for the slides in a few weeks.

__It’s been in development about 3 years. What took so long?__

For a lot of the development time, I’ve been the only person working on it. Within the last year or so, a few people (shoutout to [erikkemperman](https://github.com/erikkemperman), [sttk](https://github.com/sttk), and the rest of our core contributors) have come in to help out on some of the stickiest problems. They’ve also really kept me motivated.

Working on something this big, by myself, it’s really easy to burn out. This has pretty much been my only (unpaid) job for a year. I definitely burnt out multiple times during the development process and had to step away. It’s much more enjoyable to work on a project when other community members are involved.

Gulp is always looking for contributors. Soon, we’ll be rolling out a process to onboard people to the core team to take on parts of the project.

__Open Source is driven by community involvement. What do you need help with right now?__

We REALLY need help with documentation. That’s our biggest thing right now. All of our dependencies have been fully documented, but none of it has been pulled into the main repo & contextualized for gulp.

Of course, there are some bugs that are being sorted out. I just fixed a frustrating one this week — you shouldn’t see “Premature Close” errors anymore. If you encounter a bug, definitely let us know, with as much detail as possible.

[Demurgos](https://github.com/demurgos) and other community members have made a ton of progress on the [gulp-util migration](https://github.com/gulpjs/gulp-util/issues/143). But there’s still a lot of work to do because many plugins don’t function properly with gulp 4. _(Editor’s Note: see [The Problem with gulp-util](/blog/problem-with-gulp-util) to help out.)_

__When I install gulp, I get version 3.9.1. Why don’t I get 4.0.0 by default?__

While it’s published to npm, you have to use the command `npm install gulp@next` to get 4.0. There are going to be migration pains, so we didn’t want to install it by default for a brand new user. Before we make it the default, I’d like to have an official migration guide in place and do a full review and/or rewrite of the docs.

__When will it install by default?__

I don’t have any timelines because documentation is very hard to get right. [SomethingNew71](https://github.com/SomethingNew71) is working on website improvements that will display our docs so you don’t have to read from the markdown files.

__Gulp is a combination of small libraries. Did you write any new ones that the world should know about?__

Yeah! I’m really happy with a library that I created a while ago called [async-done](https://github.com/gulpjs/async-done). It’s really cool because it allows us to handle all sorts of different types of async operations uniformly. This module is what enables you to return promises, streams, or observables, among other things, from gulp tasks and orchestrate whether they should be run in series or parallel. But it doesn’t just apply to gulp; you can use it with things like the `async` library on npm. There are already a handful of non-gulp projects using `async-done` and I hope others adopt it.

__If I don’t have the time or technical prowess to help out with code or docs, how else can I contribute to make sure gulp thrives?__

We have an [Open Collective](https://opencollective.com/gulpjs) where anyone can donate! We have things like a t-shirt tier and even display the top 10 donors on our [website](/). So there are benefits for you and/or your employer to donate.

__Thanks [Blaine](https://github.com/phated)!__
