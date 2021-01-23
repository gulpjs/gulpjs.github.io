(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(10),i=(n(0),n(176)),b={id:"dest",title:"dest()",hide_title:!0,sidebar_label:"dest()"},c={id:"api/dest",title:"dest()",description:"# dest()",source:"@site/docs/api/dest.md",permalink:"/docs/en/api/dest",sidebar_label:"dest()",sidebar:"docs",previous:{title:"src()",permalink:"/docs/en/api/src"},next:{title:"symlink()",permalink:"/docs/en/api/symlink"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Metadata updates",id:"metadata-updates",children:[]},{value:"Sourcemaps",id:"sourcemaps",children:[]},{value:"Symbolic links on Windows",id:"symbolic-links-on-windows",children:[]}],o={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dest"},"dest()"),Object(i.b)("p",null,"Creates a stream for writing ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/api/concepts#vinyl"}),"Vinyl")," objects to the file system."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\n\nfunction copy() {\n  return src('input/*.js')\n    .pipe(dest('output/'));\n}\n\nexports.copy = copy;\n")),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"dest(directory, [options])\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"directory",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"(required)")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The path of the output directory where files will be written. If a function is used, the function will be called with each Vinyl object and must return a string directory path.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"options"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Detailed in ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#options"}),"Options")," below.")))),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"A stream that can be used in the middle or at the end of a pipeline to create files on the file system.\nWhenever a Vinyl object is passed through the stream, it writes the contents and other details out to the file system at the given directory. If the Vinyl object has a ",Object(i.b)("inlineCode",{parentName:"p"},"symlink")," property, a symbolic link will be created instead of writing the contents. After the file is created, its ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#metadata-updates"}),"metadata will be updated")," to match the Vinyl object."),Object(i.b)("p",null,"Whenever a file is created on the file system, the Vinyl object will be modified."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"cwd"),", ",Object(i.b)("inlineCode",{parentName:"li"},"base"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"path")," properties will be updated to match the created file."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"stat")," property will be updated to match the file on the file system."),Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("inlineCode",{parentName:"li"},"contents")," property is a stream, it will be reset so it can be read again.")),Object(i.b)("h3",{id:"errors"},"Errors"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"directory"),' is an empty string, throws an error with the message, "Invalid dest() folder argument. Please specify a non-empty string or a function."'),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"directory"),' is not a string or function, throws an error with the message, "Invalid dest() folder argument. Please specify a non-empty string or a function."'),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"directory")," is a function that returns an empty string or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),', emits an error with the message, "Invalid output folder".'),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"For options that accept a function, the passed function will be called with each Vinyl object and must return a value of another listed type.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"cwd"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"process.cwd()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The directory that will be combined with any relative path to form an absolute path. Is ignored for absolute paths. Use to avoid combining ",Object(i.b)("inlineCode",{parentName:"td"},"directory")," with ",Object(i.b)("inlineCode",{parentName:"td"},"path.join()"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"mode"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"stat.mode")," of the Vinyl object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The mode used when creating files. If not set and ",Object(i.b)("inlineCode",{parentName:"td"},"stat.mode")," is missing, the process' mode will be used instead.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dirMode"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"number",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The mode used when creating directories. If not set, the process' mode will be used.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"overwrite"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When true, overwrites existing files with the same path.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"append"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, adds contents to the end of the file, instead of replacing existing contents.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"sourcemaps"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean",Object(i.b)("br",null),"string",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, writes inline sourcemaps to the output file. Specifying a ",Object(i.b)("inlineCode",{parentName:"td"},"string")," path will write external ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#sourcemaps"}),"sourcemaps")," at the given path.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"relativeSymlinks"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When false, any symbolic links created will be absolute.",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"Note"),": Ignored if a junction is being created, as they must be absolute.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"useJunctions"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean",Object(i.b)("br",null),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This option is only relevant on Windows and ignored elsewhere. When true, creates directory symbolic link as a junction. Detailed in ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#symbolic-links-on-windows"}),"Symbolic links on Windows")," below.")))),Object(i.b)("h2",{id:"metadata-updates"},"Metadata updates"),Object(i.b)("p",null,"Whenever the ",Object(i.b)("inlineCode",{parentName:"p"},"dest()")," stream creates a file, the Vinyl object's ",Object(i.b)("inlineCode",{parentName:"p"},"mode"),", ",Object(i.b)("inlineCode",{parentName:"p"},"mtime"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"atime")," are compared to the created file. If they differ, the created file will be updated to reflect the Vinyl object's metadata. If those properties are the same, or gulp doesn't have permissions to make changes, the attempt is skipped silently."),Object(i.b)("p",null,"This functionality is disabled on Windows or other operating systems that don't support Node's ",Object(i.b)("inlineCode",{parentName:"p"},"process.getuid()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"process.geteuid()")," methods. This is due to Windows having unexpected results through usage of ",Object(i.b)("inlineCode",{parentName:"p"},"fs.fchmod()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fs.futimes()"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": The ",Object(i.b)("inlineCode",{parentName:"p"},"fs.futimes()")," method internally converts ",Object(i.b)("inlineCode",{parentName:"p"},"mtime")," and ",Object(i.b)("inlineCode",{parentName:"p"},"atime")," timestamps to seconds. This division by 1000 may cause some loss of precision on 32-bit operating systems."),Object(i.b)("h2",{id:"sourcemaps"},"Sourcemaps"),Object(i.b)("p",null,"Sourcemap support is built directly into ",Object(i.b)("inlineCode",{parentName:"p"},"src()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dest()"),", but it is disabled by default. Enable it to produce inline or external sourcemaps."),Object(i.b)("p",null,"Inline sourcemaps:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('gulp-uglify');\n\nsrc('input/**/*.js', { sourcemaps: true })\n  .pipe(uglify())\n  .pipe(dest('output/', { sourcemaps: true }));\n")),Object(i.b)("p",null,"External sourcemaps:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('gulp-uglify');\n\nsrc('input/**/*.js', { sourcemaps: true })\n  .pipe(uglify())\n  .pipe(dest('output/', { sourcemaps: '.' }));\n")),Object(i.b)("h2",{id:"symbolic-links-on-windows"},"Symbolic links on Windows"),Object(i.b)("p",null,"When creating symbolic links on Windows, a ",Object(i.b)("inlineCode",{parentName:"p"},"type")," argument is passed to Node's ",Object(i.b)("inlineCode",{parentName:"p"},"fs.symlink()")," method which specifies the kind of target being linked. The link type is set to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'file'")," when the target is a regular file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'junction'")," when the target is a directory"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'dir'")," when the target is a directory and the user disables the ",Object(i.b)("inlineCode",{parentName:"li"},"useJunctions")," option")),Object(i.b)("p",null,"If you try to create a dangling (pointing to a non-existent target) link, the link type can't be determined automatically. In these cases, behavior will vary depending on whether the dangling link is being created via ",Object(i.b)("inlineCode",{parentName:"p"},"symlink()")," or via ",Object(i.b)("inlineCode",{parentName:"p"},"dest()"),"."),Object(i.b)("p",null,"For dangling links created via ",Object(i.b)("inlineCode",{parentName:"p"},"symlink()"),", the incoming Vinyl object represents the target, so its stats will determine the desired link type. If ",Object(i.b)("inlineCode",{parentName:"p"},"isDirectory()")," returns false then a ",Object(i.b)("inlineCode",{parentName:"p"},"'file'")," link is created, otherwise a ",Object(i.b)("inlineCode",{parentName:"p"},"'junction'")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"'dir'")," link is created depending on the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"useJunctions")," option."),Object(i.b)("p",null,"For dangling links created via ",Object(i.b)("inlineCode",{parentName:"p"},"dest()"),", the incoming Vinyl object represents the link - typically loaded from disk via ",Object(i.b)("inlineCode",{parentName:"p"},"src(..., { resolveSymlinks: false })"),". In this case, the link type can't be reasonably determined and defaults to using ",Object(i.b)("inlineCode",{parentName:"p"},"'file'"),". This may cause unexpected behavior if you are creating a dangling link to a directory. ",Object(i.b)("strong",{parentName:"p"},"Avoid this scenario.")))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(b,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);