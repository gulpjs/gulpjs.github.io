(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{151:function(e,a,t){"use strict";t.r(a);var n=t(204),r=t.n(n),c=(t(190),t(248),t(77),t(89),t(313)),s=t(205),i=(t(250),t(30),t(21),t(22),t(88),t(252),t(206),t(255),t(256)),l=(t(200),t(0)),o=t.n(l),u=t(178),m=t.n(u),p=t(191),d=t(257),g=t.n(d),f="https://registry.npmjs.com/-/v1/search",v=["gulp","gulpplugin"];function h(e){return!v.includes(e)}var b=function(){function e(e){this._package=e.package,this._flags=e.flags?e.flags:{}}return Object(i.a)(e,[{key:"key",get:function(){return this._package.name}},{key:"name",get:function(){return this._package.name}},{key:"isDeprecated",get:function(){return!!this._flags.deprecated}},{key:"deprecatedMessage",get:function(){return this._flags.deprecated?this._flags.deprecated:""}},{key:"description",get:function(){return this._package.description}},{key:"version",get:function(){return"v"+this._package.version}},{key:"keywords",get:function(){var e=new Set(this._package.keywords);return Array.from(e).filter(h)}},{key:"primaryUrl",get:function(){var e=this._package.links,a=e.npm,t=e.homepage,n=e.repository;return a||(t||n)}},{key:"links",get:function(){var e=this._package.links,a=e.npm,t=e.homepage,n=e.repository,r=[];return a&&r.push({text:"npm",href:a}),t&&t!==a&&t!==n&&t!==n+"#readme"&&r.push({text:"homepage",href:t}),n&&r.push({text:"repository",href:n}),r}}]),e}();function k(e){return new b(e)}function _(e){var a=e.keywords,t=void 0===a?[]:a;return 0===t.length?null:o.a.createElement("div",{className:"card__footer"},o.a.createElement("ul",{className:m()("pills padding-top--sm text--normal text--right",g.a.pluginCardKeywords)},t.map((function(e){return o.a.createElement("li",{key:e,className:"pill-item"},e)}))))}function y(e){var a,t,n=e.plugin,r=n.isDeprecated,c=n.deprecatedMessage,s=m()("card",((a={})[g.a.pluginDeprecatedCard]=r,a)),i=m()("card__header",((t={})[g.a.pluginCardHeader]=!r,t[g.a.deprecatedCardHeader]=r,t));return o.a.createElement("div",{className:"row padding-vert--md"},o.a.createElement("div",{className:"col col--10 col--offset-1"},o.a.createElement("div",{key:n.key,className:s},o.a.createElement("div",{className:i},r&&o.a.createElement("span",{className:"badge badge--primary"},"Deprecated"),o.a.createElement("h2",null,o.a.createElement("a",{className:g.a.primaryUrl,href:n.primaryUrl},n.name)),!r&&o.a.createElement("span",{className:"badge badge--primary"},n.version)),o.a.createElement("div",{className:"card__body"},r?o.a.createElement("div",{className:g.a.deprecatedMessage},c):n.description,o.a.createElement("div",{className:"padding-top--sm"},n.links.map((function(e){return o.a.createElement("a",{key:e.text,className:"padding-right--sm",href:e.href},e.text)})))),!r&&o.a.createElement(_,{keywords:n.keywords}))))}function E(e){e&&e.preventDefault()}function j(e){var a=e.onPage,t=void 0===a?E:a;return o.a.createElement("div",{className:"row padding-vert--md"},o.a.createElement("div",{className:"col col--4 col--offset-4"},o.a.createElement("button",{className:"button button--block button--primary",onClick:t},"Load more")))}function N(e){var a="keywords:";return e.size?(a+=[].concat(e).join(","),a+="+gulpplugin"):a+="gulpplugin",a}function O(){return(O=Object(s.a)(r.a.mark((function e(a,t,n){var c,s,i,l,o,u,m,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=""),void 0===n&&(n=0),20,c=[N(a),"is:unstable","not:unstable"],t&&c.push(encodeURIComponent(t)),s=""+20*n,i=c.join(" "),e.prev=7,l=f+"?from="+s+"&text="+i+"&quality=0.5&popularity=1.0&maintenance=0.1",e.next=11,fetch(l);case 11:return o=e.sent,e.next=14,o.json();case 14:return u=e.sent,m=u.total,p=u.objects,e.abrupt("return",{total:m,plugins:p.map(k)});case 20:return e.prev=20,e.t0=e.catch(7),console.log(e.t0),e.abrupt("return",{total:0,plugins:[]});case 24:case"end":return e.stop()}}),e,null,[[7,20]])})))).apply(this,arguments)}function w(){var e=Object(l.useState)(!0),a=e[0],t=e[1],n=Object(l.useState)(""),r=n[0],s=n[1],i=Object(l.useState)([]),o=i[0],u=i[1],m=Object(l.useState)("Search"),p=m[0],d=m[1],g=Object(l.useState)(new Set),f=g[0],v=g[1],h=Object(l.useState)(""),b=h[0],k=h[1],_=Object(l.useState)(!1),y=_[0],E=_[1],j=Object(l.useState)(0),N=j[0],w=j[1],C=Object(l.useState)(!1),S=C[0],D=C[1];return Object(l.useEffect)((function(){(function(e,a,t){return O.apply(this,arguments)})(f,b,N).then((function(e){if(a)s("Popular plugins"),d("Search "+e.total+" plugins");else{var t=function(e,a){void 0===e&&(e=new Set),void 0===a&&(a="");var t=[];return e.size&&t.push("keywords:"+[].concat(e).join(",")),a&&t.push(a),t.join(" ")}(f,b);s("Found "+e.total+" searching for `"+t+"`")}var n;(n=y?o.concat(e.plugins):e.plugins).length===e.total?D(!1):D(!0),u(n)}))}),[b,f,N]),[{title:r,plugins:o,placeholder:p,hasMore:S},{search:function(e){E(!1),w(0),t(""===e);var a=function(e){for(var a,t=new Set,n=Object(c.a)(e.matchAll(/keywords:([\S]*)\s*/g));!(a=n()).done;){var r=a.value[1].split(",");t=new Set([].concat(t,r))}return[t,e.replace(/keywords:([\S]*)\s*/g,"").trim()]}(e),n=a[0],r=a[1];v(n),k(r)},paginate:function(){E(!0),w(N+1)}}]}a.default=function(){var e=w(),a=e[0],t=a.title,n=a.plugins,r=a.placeholder,c=a.hasMore,s=e[1],i=s.search,u=s.paginate,d=Object(l.useState)(""),f=d[0],v=d[1];return o.a.createElement(p.a,{title:"Plugins"},o.a.createElement("main",{className:"container padding-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--10 col--offset-1"},o.a.createElement("form",{className:g.a.searchContainer,onSubmit:function(e){e.preventDefault(),i(f)}},o.a.createElement("input",{type:"search",className:g.a.searchInput,placeholder:r,value:f,onChange:function(e){e.preventDefault(),v(e.target.value)}}),o.a.createElement("button",{className:m()("button button--primary",g.a.searchButton)},"Search")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--10 col--offset-1"},o.a.createElement("h1",{className:"margin-vert--md"},t))),n.map((function(e){return o.a.createElement(y,{key:e.name,plugin:e})})),c?o.a.createElement(j,{onPage:u}):null))}},192:function(e,a,t){"use strict";var n=t(2),r=(t(185),t(75),t(10)),c=t(0),s=t.n(c),i=t(178),l=t.n(i),o=t(181),u=t(177),m=t(179),p=t(180),d=t(183),g=t(193),f=t(194),v=t(186),h=t(199),b=t(189),k=t(132),_=t.n(k);function y(){}function E(e){var a=e.activeBasePath,t=e.to,c=e.href,i=e.logo,d=e.label,g=(e.position,Object(r.a)(e,["activeBasePath","to","href","logo","label","position"])),f=Object(m.a)(t),h=Object(m.a)(a),b=function(e){void 0===e&&(e={});var a=Object(u.a)().siteConfig,t=(a=void 0===a?{}:a).baseUrl,n=Object(v.a)().isDarkTheme,r=e.href||t;e.target?e.target:Object(p.a)(r);var c=e.srcDark&&n?e.srcDark:e.src;return{logoImageUrl:Object(m.a)(c),logoAlt:e.alt}}(i),k=b.logoImageUrl,y=b.logoAlt,E=null!=k?s.a.createElement("img",{className:l()(_.a.navbarIcon),src:k,alt:y}):d;return s.a.createElement(o.a,Object(n.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:c}:Object.assign({activeClassName:"navbar__link--active",to:f},a?{isActive:function(e,a){return a.pathname.startsWith(h)}}:null),g),E)}function j(e){var a,t=e.items,c=e.emphasis,i=e.position,o=Object(r.a)(e,["items","emphasis","position"]);return t?s.a.createElement("div",{className:l()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i})},s.a.createElement(E,Object(n.a)({className:"navbar__item navbar__link"},o),o.label),s.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement(E,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):s.a.createElement(E,Object(n.a)({className:l()("navbar__item","navbar__link",(a={"navbar__link--icon":o.logo},a[_.a.emphasis]=c,a[_.a.noWrap]=!0,a))},o))}function N(e){return"/plugins"!==e&&"/plugins/"!==e}a.a=function(){var e,a=Object(u.a)(),t=a.siteConfig.themeConfig,r=t.navbar,i=((r=void 0===r?{}:r).title,r.links),m=void 0===i?[]:i,p=r.hideOnScroll,k=void 0!==p&&p,E=t.disableDarkMode,O=void 0!==E&&E,w=a.isClient,C=Object(d.c)(),S=Object(c.useState)(N(C.pathname)),D=S[0],x=S[1];Object(c.useEffect)((function(){x(N(C.pathname))}),[C]);var U=Object(v.a)(),B=U.isDarkTheme,H=U.setLightTheme,I=U.setDarkTheme,M=Object(h.a)(k),T=M.navbarRef,A=M.isNavbarVisible,P=Object(b.a)(),L=P.logoLink,K=P.logoLinkProps,z=P.logoImageUrl,q=P.logoAlt,J=Object(c.useCallback)((function(e){return e.target.checked?I():H()}),[H,I]);return s.a.createElement("nav",{ref:T,className:l()("navbar","navbar--light","navbar--fixed-top",(e={},e[_.a.navbarHideable]=k,e[_.a.navbarHidden]=!A,e))},s.a.createElement("div",{className:"navbar__inner"},s.a.createElement("div",{className:"navbar__items"},s.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:L},K),null!=z&&s.a.createElement("img",{key:w,className:"navbar__logo",src:z,alt:q})),m.filter((function(e){return"left"===e.position})).map((function(e,a){return s.a.createElement(j,Object(n.a)({},e,{key:a}))}))),s.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"right"===e.position})).map((function(e,a){return s.a.createElement(j,Object(n.a)({},e,{key:a}))})),!O&&s.a.createElement(f.a,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:B,onChange:J}),D&&s.a.createElement(g.a,{handleSearchBarToggle:y,isSearchBarExpanded:!0}))))}},257:function(e,a,t){e.exports={searchContainer:"searchContainer_33-B",searchInput:"searchInput_3OHo",searchButton:"searchButton_1s18",pluginDeprecatedCard:"pluginDeprecatedCard_2z11",deprecatedCardHeader:"deprecatedCardHeader_3_qB",deprecatedMessage:"deprecatedMessage_3ETg",pluginCardHeader:"pluginCardHeader_3ATt",pluginCardKeywords:"pluginCardKeywords_2KTe",primaryUrl:"primaryUrl_1xjY"}}}]);