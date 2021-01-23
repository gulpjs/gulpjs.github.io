(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(2),i=n(10),a=(n(0),n(176)),o={id:"working-with-files",title:"Working with Files",hide_title:!0,sidebar_label:"Working with Files"},s={id:"getting-started/working-with-files",title:"Working with Files",description:"# Working with Files",source:"@site/docs/getting-started/5-working-with-files.md",permalink:"/docs/en/getting-started/working-with-files",sidebar_label:"Working with Files",sidebar:"docs",previous:{title:"Async Completion",permalink:"/docs/en/getting-started/async-completion"},next:{title:"Explaining Globs",permalink:"/docs/en/getting-started/explaining-globs"}},l=[{value:"Adding files to the stream",id:"adding-files-to-the-stream",children:[]},{value:"Output in phases",id:"output-in-phases",children:[]},{value:"Modes: streaming, buffered, and empty",id:"modes-streaming-buffered-and-empty",children:[]}],p={rightToc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"working-with-files"},"Working with Files"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"src()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"dest()")," methods are exposed by gulp to interact with files on your computer."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"src()")," is given a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/getting-started/explaining-globs"}),"glob")," to read from the file system and produces a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/stream.html"}),"Node stream"),". It locates all matching files and reads them into memory to pass through the stream."),Object(a.b)("p",null,"The stream produced by ",Object(a.b)("inlineCode",{parentName:"p"},"src()")," should be returned from a task to signal async completion, as mentioned in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/getting-started/creating-tasks"}),"Creating Tasks"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\n\nexports.default = function() {\n  return src('src/*.js')\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("p",null,"The main API of a stream is the ",Object(a.b)("inlineCode",{parentName:"p"},".pipe()")," method for chaining Transform or Writable streams."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst babel = require('gulp-babel');\n\nexports.default = function() {\n  return src('src/*.js')\n    .pipe(babel())\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dest()")," is given an output directory string and also produces a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/stream.html"}),"Node stream")," which is generally used as a terminator stream. When it receives a file passed through the pipeline, it writes the contents and other details out to the filesystem at a given directory.  The ",Object(a.b)("inlineCode",{parentName:"p"},"symlink()")," method is also available and operates like ",Object(a.b)("inlineCode",{parentName:"p"},"dest()"),", but creates links instead of files (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/api/symlink"}),Object(a.b)("inlineCode",{parentName:"a"},"symlink()"))," for details)."),Object(a.b)("p",null,"Most often plugins will be placed between ",Object(a.b)("inlineCode",{parentName:"p"},"src()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"dest()")," using the ",Object(a.b)("inlineCode",{parentName:"p"},".pipe()")," method and will transform the files within the stream."),Object(a.b)("h2",{id:"adding-files-to-the-stream"},"Adding files to the stream"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"src()")," can also be placed in the middle of a pipeline to add files to the stream based on the given globs. The additional files will only be available to transformations later in the stream.  If ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/getting-started/explaining-globs#overlapping-globs"}),"globs overlap"),", the files will be added again."),Object(a.b)("p",null,"This can be useful for transpiling some files before adding plain JavaScript files to the pipeline and uglifying everything."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst babel = require('gulp-babel');\nconst uglify = require('gulp-uglify');\n\nexports.default = function() {\n  return src('src/*.js')\n    .pipe(babel())\n    .pipe(src('vendor/*.js'))\n    .pipe(uglify())\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("h2",{id:"output-in-phases"},"Output in phases"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"dest()")," can be used in the middle of a pipeline to write intermediate states to the filesystem. When a file is received, the current state is written out to the filesystem, the path is updated to represent the new location of the output file, then that file continues down the pipeline."),Object(a.b)("p",null,"This feature can be useful to create unminified and minified files with the same pipeline."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst babel = require('gulp-babel');\nconst uglify = require('gulp-uglify');\nconst rename = require('gulp-rename');\n\nexports.default = function() {\n  return src('src/*.js')\n    .pipe(babel())\n    .pipe(src('vendor/*.js'))\n    .pipe(dest('output/'))\n    .pipe(uglify())\n    .pipe(rename({ extname: '.min.js' }))\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("h2",{id:"modes-streaming-buffered-and-empty"},"Modes: streaming, buffered, and empty"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"src()")," can operate in three modes: buffering, streaming, and empty. These are configured with the ",Object(a.b)("inlineCode",{parentName:"p"},"buffer")," and ",Object(a.b)("inlineCode",{parentName:"p"},"read")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/api/src#options"}),"options")," on ",Object(a.b)("inlineCode",{parentName:"p"},"src()"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Buffering mode is the default and loads the file contents into memory. Plugins usually operate in buffering mode and many don't support streaming mode."),Object(a.b)("li",{parentName:"ul"},"Streaming mode exists mainly to operate on large files that can't fit in memory, like giant images or movies. The contents are streamed from the filesystem in small chunks instead of loaded all at once. If you need to use streaming mode, look for a plugin that supports it or write your own."),Object(a.b)("li",{parentName:"ul"},"Empty mode contains no contents and is useful when only working with file metadata.")))}c.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||a;return n?i.a.createElement(m,s(s({ref:t},p),{},{components:n})):i.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);