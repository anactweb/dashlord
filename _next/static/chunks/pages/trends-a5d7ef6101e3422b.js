(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var l=t(85893),r=t(9008),u=t.n(r),n=t(67294),d=t(45697),o=t.n(d);function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},s.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,n.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=i(e,["color","size"]);return n.createElement("svg",s({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),n.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},v.displayName="TrendingUp";var T=v;function Z(){return Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Z.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=(0,n.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,d=c(e,["color","size"]);return n.createElement("svg",Z({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),n.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},h.displayName="TrendingDown";var p=h,f=t(74041),g=t(18121),y=t(49384),b={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=b[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,y.BE)(r)-(0,y.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(T,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return b[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],_=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in b})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],n=b[t].treshold;(!n||Math.abs(r-u)>(n||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(g.s,{title:(0,y.p5)(e),url:"/url/".concat(encodeURIComponent((0,y.N0)(e))),children:(0,l.jsx)(f.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},j=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-09-06T15:38:08.000Z","value":5},{"date":"2021-10-17T00:54:36.000Z","value":6},{"date":"2021-11-28T00:59:23.000Z","value":7},{"date":"2021-12-12T01:00:52.000Z","value":8}],"httpGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"},{"date":"2022-02-27T01:07:37.000Z","value":"B"},{"date":"2022-04-17T01:21:57.000Z","value":"A+"}],"dependabotGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"F"},{"date":"2021-06-14T10:39:19.000Z","value":"D"},{"date":"2022-03-06T01:06:39.000Z","value":"E"}],"dependabotCount":[{"date":"2021-05-31T09:35:12.000Z","value":6},{"date":"2021-06-14T10:39:19.000Z","value":7},{"date":"2021-06-29T22:27:16.000Z","value":8},{"date":"2021-09-02T10:35:57.000Z","value":4},{"date":"2021-10-17T00:54:36.000Z","value":6},{"date":"2021-12-12T01:00:52.000Z","value":7},{"date":"2021-12-26T01:01:17.000Z","value":4},{"date":"2022-01-09T01:03:17.000Z","value":5},{"date":"2022-01-16T01:03:41.000Z","value":6},{"date":"2022-01-23T00:56:13.000Z","value":9},{"date":"2022-01-30T00:56:33.000Z","value":8},{"date":"2022-02-20T01:08:27.000Z","value":10},{"date":"2022-02-27T01:07:37.000Z","value":12},{"date":"2022-03-06T01:06:39.000Z","value":13},{"date":"2022-04-03T01:18:21.000Z","value":14},{"date":"2022-06-26T01:34:44.000Z","value":15},{"date":"2022-10-30T01:52:11.000Z","value":16},{"date":"2022-11-13T01:39:12.000Z","value":18},{"date":"2022-11-20T01:37:27.000Z","value":20},{"date":"2022-11-27T01:34:44.000Z","value":22},{"date":"2022-12-11T01:24:39.000Z","value":23},{"date":"2023-01-08T01:25:13.000Z","value":24},{"date":"2023-01-15T01:30:11.000Z","value":25},{"date":"2023-01-29T01:21:19.000Z","value":26}],"testsslGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"},{"date":"2021-06-14T10:39:19.000Z","value":"B"}],"cookiesCount":[{"date":"2021-05-31T09:35:12.000Z","value":0},{"date":"2021-06-14T10:39:19.000Z","value":2}],"trackersGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"trackersCount":[{"date":"2021-05-31T09:35:12.000Z","value":0}],"lighthouse_performance":[{"date":"2021-05-31T09:35:12.000Z","value":0.5},{"date":"2021-09-02T10:35:57.000Z","value":0.45},{"date":"2021-11-28T00:59:23.000Z","value":0.4},{"date":"2021-12-12T01:00:52.000Z","value":0.35},{"date":"2022-04-24T01:23:14.000Z","value":0.3},{"date":"2022-06-19T01:30:49.000Z","value":0.35},{"date":"2023-01-29T01:21:19.000Z","value":0.25}],"lighthouse_performanceGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"},{"date":"2022-04-24T01:23:14.000Z","value":"E"},{"date":"2022-06-19T01:30:49.000Z","value":"D"},{"date":"2023-01-29T01:21:19.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2021-05-31T09:35:12.000Z","value":0.92},{"date":"2021-06-14T20:16:26.000Z","value":0.93},{"date":"2021-09-02T10:35:57.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-05-31T09:35:12.000Z","value":0.8},{"date":"2021-06-14T10:39:19.000Z","value":0.93},{"date":"2022-08-07T01:49:34.000Z","value":0.92},{"date":"2022-12-11T01:24:39.000Z","value":1},{"date":"2023-04-16T01:14:13.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"},{"date":"2021-06-14T10:39:19.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-05-31T09:35:12.000Z","value":0.83},{"date":"2021-09-06T15:38:08.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"},{"date":"2021-09-06T15:38:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-05-31T09:35:12.000Z","value":0.42},{"date":"2022-08-07T01:49:34.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"},{"date":"2022-08-07T01:49:34.000Z","value":"E"}],"statsGrade":[{"date":"2021-06-29T22:27:16.000Z","value":"A"},{"date":"2021-09-06T15:38:08.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-17T00:54:36.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-17T00:54:36.000Z","value":false},{"date":"2021-11-28T00:59:23.000Z","value":true},{"date":"2021-12-12T01:00:52.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-17T00:54:36.000Z","value":"2021-12-26T11:59:00.000Z"},{"date":"2021-12-12T01:00:52.000Z","value":"2022-03-04T16:49:00.000Z"},{"date":"2021-12-26T01:01:17.000Z","value":"2022-03-20T08:22:00.000Z"},{"date":"2022-02-20T01:08:27.000Z","value":"2022-05-19T07:23:00.000Z"},{"date":"2022-02-27T01:07:37.000Z","value":"2022-05-25T17:41:00.000Z"},{"date":"2022-03-20T01:08:46.000Z","value":"2022-05-19T07:23:00.000Z"},{"date":"2022-04-24T01:23:14.000Z","value":"2022-07-18T06:24:00.000Z"},{"date":"2022-06-19T01:30:49.000Z","value":"2022-09-16T05:24:00.000Z"},{"date":"2022-08-21T01:40:14.000Z","value":"2022-11-15T04:25:00.000Z"},{"date":"2022-10-23T01:53:07.000Z","value":"2023-01-14T03:25:00.000Z"},{"date":"2022-12-18T01:17:16.000Z","value":"2023-03-15T02:26:00.000Z"},{"date":"2023-02-19T01:19:42.000Z","value":"2023-05-14T01:26:00.000Z"},{"date":"2023-04-16T01:14:13.000Z","value":"2023-07-13T00:27:00.000Z"}],"declaration-a11y":[{"date":"2022-02-10T09:41:58.000Z","value":"C"}],"ecoindexGrade":[{"date":"2022-09-28T12:39:44.000Z","value":"D"},{"date":"2023-04-16T01:14:13.000Z","value":"E"}],"declaration-rgpd":[]},"https://beta.gouv.fr":{"404":[{"date":"2021-09-06T15:38:08.000Z","value":2},{"date":"2021-12-26T01:01:17.000Z","value":4},{"date":"2022-01-02T01:00:55.000Z","value":2},{"date":"2022-01-09T01:03:17.000Z","value":25},{"date":"2022-01-16T01:03:41.000Z","value":3},{"date":"2022-01-23T00:56:13.000Z","value":8},{"date":"2022-01-30T00:56:33.000Z","value":3},{"date":"2022-02-13T00:58:55.000Z","value":7},{"date":"2022-02-20T01:08:27.000Z","value":8},{"date":"2022-02-27T01:07:37.000Z","value":4},{"date":"2022-03-27T01:16:29.000Z","value":243},{"date":"2022-04-03T01:18:21.000Z","value":7},{"date":"2022-06-26T01:34:44.000Z","value":8},{"date":"2022-07-03T01:35:03.000Z","value":7},{"date":"2022-09-18T01:58:28.000Z","value":8},{"date":"2022-11-27T01:34:44.000Z","value":13},{"date":"2022-12-25T01:20:14.000Z","value":11},{"date":"2023-04-09T01:14:32.000Z","value":12}],"httpGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"},{"date":"2022-04-03T01:18:21.000Z","value":"D+"}],"testsslGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"}],"cookiesCount":[{"date":"2021-05-31T09:35:12.000Z","value":2}],"trackersGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"C"},{"date":"2022-04-03T01:18:21.000Z","value":"A"}],"trackersCount":[{"date":"2021-05-31T09:35:12.000Z","value":6},{"date":"2021-09-02T10:35:57.000Z","value":7},{"date":"2021-11-21T01:03:00.000Z","value":6},{"date":"2022-04-03T01:18:21.000Z","value":0}],"lighthouse_performance":[{"date":"2021-05-31T09:35:12.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-05-31T09:35:12.000Z","value":0.89},{"date":"2022-02-10T09:41:58.000Z","value":0.88},{"date":"2022-05-08T01:24:49.000Z","value":0.89},{"date":"2022-05-22T01:30:48.000Z","value":0.91},{"date":"2022-06-26T01:34:44.000Z","value":0.93},{"date":"2022-08-07T01:49:34.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-05-31T09:35:12.000Z","value":1},{"date":"2022-06-26T01:34:44.000Z","value":0.93},{"date":"2022-08-07T01:49:34.000Z","value":1},{"date":"2023-02-26T01:35:07.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-05-31T09:35:12.000Z","value":1},{"date":"2021-09-02T10:35:57.000Z","value":0.92},{"date":"2022-05-22T01:30:48.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-05-31T09:35:12.000Z","value":0.67},{"date":"2022-08-07T01:49:34.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"},{"date":"2022-08-07T01:49:34.000Z","value":"C"}],"statsGrade":[{"date":"2021-06-29T22:27:16.000Z","value":"A"}],"nmapGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-17T00:54:36.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-17T00:54:36.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-17T00:54:36.000Z","value":"2021-11-24T13:00:00.000Z"},{"date":"2021-10-31T01:04:40.000Z","value":"2022-01-23T13:00:00.000Z"},{"date":"2021-12-26T01:01:17.000Z","value":"2022-03-24T13:00:00.000Z"},{"date":"2022-02-27T01:07:37.000Z","value":"2022-05-23T13:00:00.000Z"},{"date":"2022-04-03T01:18:21.000Z","value":"2022-06-28T07:17:00.000Z"},{"date":"2022-06-05T01:37:43.000Z","value":"2022-08-27T07:18:00.000Z"},{"date":"2022-08-07T01:49:34.000Z","value":"2022-10-26T07:19:00.000Z"},{"date":"2022-09-28T12:39:44.000Z","value":"2022-12-25T07:20:00.000Z"},{"date":"2022-11-27T01:34:44.000Z","value":"2023-02-23T07:21:00.000Z"},{"date":"2023-01-29T01:21:19.000Z","value":"2023-04-24T07:22:00.000Z"},{"date":"2023-03-26T01:19:06.000Z","value":"2023-06-23T07:23:00.000Z"}],"declaration-a11y":[{"date":"2022-02-10T09:41:58.000Z","value":"C"}],"ecoindexGrade":[{"date":"2022-09-28T12:39:44.000Z","value":"B"}],"declaration-rgpd":[]}}'),x=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(_,{trends:j})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return Z}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),n=t(659),d=t(73973),o=t(83206),s=t(41664),i=t.n(s),v=t(75670),T=t.n(v),Z=function(e){var a=e.title,t=e.children,r=e.info,s=e.url,v=e.urlText,Z=void 0===v?"":v,c=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:u()(T().container,c),children:[(0,l.jsxs)("div",{className:T().banner,children:[(0,l.jsx)("h5",{className:T().mainTitle,children:a}),r&&(0,l.jsx)(n.Z,{overlay:r,children:(0,l.jsx)(d.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),s&&(p?(0,l.jsx)("a",{style:{float:"right"},href:s,target:"_blank",rel:"noreferrer noopener",children:Z}):(0,l.jsx)(i(),{prefetch:!1,href:s,children:(0,l.jsxs)("a",{style:{float:"right"},children:[Z,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:T().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);