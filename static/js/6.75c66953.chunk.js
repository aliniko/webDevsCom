(this.webpackJsonpwebdevscom=this.webpackJsonpwebdevscom||[]).push([[6],{408:function(e,r,t){"use strict";t.r(r);var o=t(11),n=t(0),s=t.n(n),i=t(85),a=t.n(i),m=t(165),c=t.n(m),p=t(21),d=t(63),u=t(46),l=t(16),w=t(17),h=t(22),g=t(19),A=t(18),b=t(79),k=t.n(b),f=(t(200),t(390),function(e){Object(g.a)(t,e);var r=Object(A.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=r.call(this,e)).setRef=o.setRef.bind(Object(h.a)(o)),o}return Object(w.a)(t,[{key:"setRef",value:function(e){this.codeEl=e}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){k.a.highlightBlock(this.codeEl)}},{key:"render",value:function(){return s.a.createElement("pre",null,s.a.createElement("code",{ref:this.setRef,className:"language-".concat(this.props.language)},this.props.value))}}]),t}(s.a.PureComponent));f.defaultProps={language:""};var U=f,O=t(405),v=t(9),N=function(e){var r=e.isBookMarked,t=e.removeBookmark,o=e.bookmarkIt;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{type:"light"}),s.a.createElement("div",{id:"bookmarkBtn",className:"button button-special is-rounded box-shadow-lift",style:{cursor:"pointer"},onClick:function(){return r?t():o()},"data-tip":r?"Remove from Bookmark":"Add to Bookmark"},s.a.createElement(O.a,{color:"blue",fill:r?"blue":"#c9cff8",className:"icon"})))},R=t(391);r.default=function(e){var r=Object(n.useState)(""),t=Object(o.a)(r,2),i=t[0],m=t[1],l=Object(n.useState)({}),w=Object(o.a)(l,2),h=w[0],g=w[1],A=Object(n.useState)(!0),b=Object(o.a)(A,2),k=b[0],f=b[1],O=Object(n.useState)([]),v=Object(o.a)(O,2),F=v[0],Q=v[1],E=Object(n.useState)(!1),G=Object(o.a)(E,2),S=G[0],y=G[1];Object(n.useEffect)((function(){Q(JSON.parse(localStorage.getItem("bookmarks")));var e=F&&F.find((function(e){return h.id===e}));if(y(!!e),!1===k){for(var r=document.querySelectorAll("#markdown h1"),t=0;t<r.length;t++)r[t].className="title is-2",r[t].setAttribute("id",Object(R.slug)(r[t].innerHTML));var o=document.querySelectorAll("#markdown h2");for(t=0;t<o.length;t++)o[t].className="title is-3",o[t].setAttribute("id",Object(R.slug)(o[t].innerHTML));var n=document.querySelectorAll("#markdown h3");for(t=0;t<n.length;t++)n[t].className="title is-4",n[t].setAttribute("id",Object(R.slug)(n[t].innerHTML));var s=document.querySelectorAll("#markdown strong");for(t=0;t<s.length;t++)s[t].setAttribute("id",Object(R.slug)(s[t].innerHTML));var i=document.querySelectorAll("#markdown table");for(t=0;t<i.length;t++)i[t].className="table is-hoverable is-dark is-fullwidth is-striped";var a=document.querySelectorAll("img");for(t=0;t<a.length;t++)a[t].src.includes(window.location.origin)&&a[t].setAttribute("src","https://raw.githubusercontent.com/".concat(h.repoOwnerName,"/").concat(h.repoName,"/master").concat(a[t].src.replace(window.location.origin,"").replace(window.location.pathname,"").replace("/resources","")));var m=document.querySelectorAll("#markdown a");for(t=0;t<m.length;t++)m[t].href.includes("./")||m[t].href.includes(".md")&&m[t].href.includes(window.location.origin)?(m[t].setAttribute("href","https://github.com/".concat(h.repoOwnerName,"/").concat(h.repoName,"/blob/master").concat(m[t].href.replace(window.location.origin,"").replace(window.location.pathname,"").replace("/resources",""))),m[t].setAttribute("target","_blank")):m[t].href.includes("#")?m[t].href.includes("#")&&m[t].setAttribute("href",m[t].href.toLowerCase()):m[t].setAttribute("target","_blank")}}),[k]);return Object(n.useEffect)((function(){f(!0);var r=e.match.params.id,t=d.a.find((function(e){return String(e.id)===String(r)}));g(t),t&&c.a.get(t.link).then((function(e){m(e.data),f(!1)}))}),[]),k?s.a.createElement(p.a,null):s.a.createElement("div",{className:"container",id:"markdown"},s.a.createElement("div",{id:"table-of-contents"}),s.a.createElement(N,{isBookMarked:S,removeBookmark:function(){y(!1);var e=F&&F.filter((function(e){return e!==h.id}));Q(e),localStorage.setItem("bookmarks",JSON.stringify(e))},bookmarkIt:function(){y(!0),null===F?localStorage.setItem("bookmarks",JSON.stringify([h.id])):(F.push(h.id),Q(F),localStorage.setItem("bookmarks",JSON.stringify(F)))}}),s.a.createElement("div",{id:"markdown-content"},s.a.createElement("div",{className:"has-text-centered",style:{padding:"10px 0 20px"}},s.a.createElement("a",{href:"https://github.com/".concat(h.repoOwnerName,"/").concat(h.repoName,"/"),className:"button button-special box-shadow-lift is-medium is-rounded",target:"_blank",rel:"noopener noreferrer",id:"view-on-github"},s.a.createElement(u.a,null)," ",s.a.createElement("span",null," \u2003View on Github"))),s.a.createElement("div",null,s.a.createElement(a.a,{source:i,escapeHtml:!1,renderers:{code:U}}))))}},63:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var o=[{id:1,link:"https://raw.githubusercontent.com/bradtraversy/design-resources-for-developers/master/readme.md",repoName:"design-resources-for-developers",description:"Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more",repoOwnerName:"bradtraversy",repoOwner:"Brad Traversy"},{id:2,link:"https://raw.githubusercontent.com/public-apis/public-apis/master/README.md",repoName:"public-apis",description:"A collective list of free APIs for use in software and web development.",repoOwnerName:"public-apis",repoOwner:"public-apis"},{id:3,link:"https://raw.githubusercontent.com/emmabostian/developer-portfolios/master/README.md",repoName:"developer-portfolios",description:"A list of developer portfolios for your inspiration",repoOwnerName:"emmabostian",repoOwner:"Emma Bostian"},{id:4,link:"https://raw.githubusercontent.com/ErikCH/DevYouTubeList/master/README.md",repoName:"DevYouTubeList",description:"A curated list of amazing development channels on YouTube. These include web development, back-end development, front-end development live coders and more!",repoOwnerName:"ErikCH",repoOwner:"Erik Hanchett"},{id:5,link:"https://raw.githubusercontent.com/florinpop17/app-ideas/master/README.md",repoName:"app-ideas",description:"A Collection of application ideas which can be used to improve your coding skills.",repoOwnerName:"florinpop17",repoOwner:"Florin Pop"},{id:6,link:"https://raw.githubusercontent.com/lauragift21/awesome-learning-resources/master/README.md",repoName:"awesome-learning-resources",description:"fireAwesome list of resources on Web Development.",repoOwnerName:"lauragift21",repoOwner:"Gift Egwuenu"},{id:7,link:"https://raw.githubusercontent.com/alexpate/awesome-design-systems/master/README.md",repoName:"awesome-design-systems",description:"A design system is a collection of documentation on principles and best practices, that helps guide a team to build digital products.",repoOwnerName:"alexpate",repoOwner:"Alex Pate"},{id:8,link:"https://raw.githubusercontent.com/alexpate/design-system-talks/master/README.md",repoName:"design-system-talks",description:"A collection of talks on design systems",repoOwnerName:"alexpate",repoOwner:"Alex Pate"},{id:9,link:"https://raw.githubusercontent.com/dipakkr/A-to-Z-Resources-for-Students/master/README.md",repoName:"A-to-Z-Resources-for-Students",description:"Curated list of resources for college students. you should definitely check this out.",repoOwnerName:"dipakkr",repoOwner:"Deepak Kumar"},{id:10,link:"https://raw.githubusercontent.com/sdmg15/Best-websites-a-programmer-should-visit/master/README.md",repoName:"Best-websites-a-programmer-should-visit",description:"useful lists of websites for coders, must know to get always informed in order and learn new stuffs. ",repoOwnerName:"sdmg15",repoOwner:"Sonkeng Maldini"},{id:11,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/javascript.md",repoName:"FAQ - javascript",description:"FAQ javascript questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:12,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/react.md",repoName:"FAQ - React",description:"FAQ React questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:13,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/redux.md",repoName:"FAQ - Redux",description:"FAQ redux questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:14,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/vuejs.md",repoName:"FAQ - VueJS",description:"FAQ VueJS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:15,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/angular.md",repoName:"FAQ - Angular",description:"FAQ Angular questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:16,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/nodejs.md",repoName:"FAQ - nodeJS",description:"FAQ nodeJS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:17,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/angularjs.md",repoName:"FAQ - AngularJS",description:"FAQ AngularJS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:18,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/bootstrap.md",repoName:"FAQ - BootStrap",description:"FAQ BootStrap questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:19,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/css.md",repoName:"FAQ - CSS",description:"FAQ CSS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:20,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/html5.md",repoName:"FAQ - HTML5",description:"FAQ HTML5 questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:21,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/sass.md",repoName:"FAQ - SASS",description:"FAQ SASS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:22,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/webpack.md",repoName:"FAQ - WEBpack",description:"FAQ WEBpack questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:23,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/mongodb.md",repoName:"FAQ - mongoDB",description:"FAQ mongoDB questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:24,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/sql.md",repoName:"FAQ - SQL",description:"FAQ SQL questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:25,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/graphql.md",repoName:"FAQ - GraphQL",description:"FAQ GraphQL questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:26,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/c.md",repoName:"FAQ - C#",description:"FAQ C# questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:27,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/golang.md",repoName:"FAQ - GOLANG",description:"FAQ GOLANG questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:28,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/java.md",repoName:"FAQ - JAVA",description:"FAQ JAVA questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:29,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/typeScript.md",repoName:"FAQ - TypeScript",description:"FAQ TypeScript questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:30,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/aws.md",repoName:"FAQ - AWS",description:"FAQ AWS questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:31,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/git.md",repoName:"FAQ - GIT",description:"FAQ GIT questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:32,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/code-problems.md",repoName:"FAQ - code problems",description:"FAQ Code problems questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:33,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/data-structures.md",repoName:"FAQ - data structures",description:"FAQ Data Structures questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:34,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/design-patterns.md",repoName:"FAQ - Design patterns",description:"FAQ Design Patterns questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:35,link:"https://raw.githubusercontent.com/FAQGURU/FAQGURU/master/topics/en/agile.md",repoName:"FAQ - Agile",description:"FAQ Agile questions in interviews",repoOwnerName:"FAQGURU",repoOwner:"FAQGURU"},{id:36,link:"https://raw.githubusercontent.com/Michael0x2a/curated-programming-resources/master/resources.md",repoName:"curated-programming-resources",description:"A curated list of resources for learning programming.",repoOwnerName:"Michael0x2a",repoOwner:"Michael Lee"},{id:37,link:"https://raw.githubusercontent.com/charlax/professional-programming/master/README.md",repoName:"professional-programming",description:"A collection of full-stack resources for programmers.",repoOwnerName:"charlax",repoOwner:"Charles-Axel Dein"},{id:38,link:"https://raw.githubusercontent.com/charlax/engineering-management/master/README.md",repoName:"engineering-management",description:"A collection of inspiring resources related to engineering management and tech leadership",repoOwnerName:"charlax",repoOwner:"Charles-Axel Dein"},{id:39,link:"https://raw.githubusercontent.com/tuvtran/project-based-learning/master/README.md",repoName:"project-based-learning",description:"A list of programming tutorials in which learners build an application from scratch. These tutorials are divided into different primary programming languages.",repoOwnerName:"tuvtran",repoOwner:"Tu V. Tran"},{id:40,link:"https://raw.githubusercontent.com/MunGell/awesome-for-beginners/master/README.md",repoName:"awesome-for-beginners",description:"A list of awesome beginners-friendly projects.",repoOwnerName:"MunGell",repoOwner:"Shmavon Gazanchyan"},{id:41,link:"https://raw.githubusercontent.com/kamranahmedse/developer-roadmap/master/README.md",repoName:"developer-roadmap",description:"Roadmap to becoming a web developer in 2020 https://roadmap.sh",repoOwnerName:"kamranahmedse",repoOwner:"Kamran Ahmed"},{id:42,link:"https://raw.githubusercontent.com/mtdvio/every-programmer-should-know/master/README.md",repoName:"every-programmer-should-know",description:"A collection of (mostly) technical things every software developer should know",repoOwnerName:"mtdvio",repoOwner:"MTDV"},{id:43,link:"https://raw.githubusercontent.com/hardikvasa/awesome-programming/master/README.md",repoName:"awesome-programming",description:"A curated list of awesome programming talks, articles, books, resources and more!!",repoOwnerName:"hardikvasa",repoOwner:"Hardik Vasa"},{id:44,link:"https://raw.githubusercontent.com/elsewhencode/project-guidelines/master/README.md",repoName:"project-guidelines",description:"A set of best practices for JavaScript projects",repoOwnerName:"elsewhencode",repoOwner:"Elsewhen    "},{id:45,link:"https://raw.githubusercontent.com/RitikPatni/Front-End-Web-Development-Resources/master/README.md",repoName:"Front-End-Web-Development-Resources",description:"This repository contains content which will be helpful in your journey as a front-end Web Developer https://resources.ritikpatni.me/",repoOwnerName:"RitikPatni",repoOwner:"Ritik Patni"},{id:46,link:"https://raw.githubusercontent.com/ripienaar/free-for-dev/master/README.md",repoName:"free-for-dev",description:"A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev https://free-for.dev/",repoOwnerName:"ripienaar",repoOwner:"R.I.Pienaar"},{id:47,link:"https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/README.md",repoName:"clean-code-javascript",description:"A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev https://free-for.dev/",repoOwnerName:"ryanmcdermott",repoOwner:"Ryan McDermott"},{id:48,link:"https://raw.githubusercontent.com/ryanmcdermott/code-review-tips/master/README.md",repoName:"code-review-tips",description:"microscope Common problems to look for in a code review",repoOwnerName:"ryanmcdermott",repoOwner:"Ryan McDermott"},{id:49,link:"https://raw.githubusercontent.com/lydiahallie/javascript-questions/master/en-EN/README.md",repoName:"javascript-questions",description:"A long list of (advanced) JavaScript questions, and their explanations sparkles",repoOwnerName:"lydiahallie",repoOwner:"Lydia Hallie"},{id:50,link:"https://raw.githubusercontent.com/denysdovhan/wtfjs/master/README.md",repoName:"wtfjs",description:"A list of funny and tricky JavaScript examples.",repoOwnerName:"denysdovhan",repoOwner:"Denys Dovhan"},{id:51,link:"https://raw.githubusercontent.com/denysdovhan/bash-handbook/master/README.md",repoName:"bash-handbook",description:" For those who wanna learn Bash",repoOwnerName:"denysdovhan",repoOwner:"Denys Dovhan"},{id:52,link:"https://raw.githubusercontent.com/jwasham/coding-interview-university/master/README.md",repoName:"coding-interview-university",description:" A complete computer science study plan to become a software engineer.",repoOwnerName:"jwasham",repoOwner:"John Washam"},{id:53,link:"https://raw.githubusercontent.com/leonardomso/33-js-concepts/master/README.md",repoName:"33-js-concepts",description:"scroll 33 concepts every JavaScript developer should know.",repoOwnerName:"leonardomso",repoOwner:"Leonardo Maldonado"},{id:54,link:"https://raw.githubusercontent.com/mbeaudru/modern-js-cheatsheet/master/README.md",repoName:"modern-js-cheatsheet",description:"Cheatsheet for the JavaScript knowledge you will frequently encounter in modern projects.",repoOwnerName:"mbeaudru",repoOwner:"Manuel Beaudru"},{id:55,link:"https://raw.githubusercontent.com/MaximAbramchuck/awesome-interview-questions/master/README.md",repoName:"awesome-interview-questions",description:" A curated awesome list of lists of interview questions. Feel free to contribute! mortar_board.",repoOwnerName:"MaximAbramchuck",repoOwner:"Maksim Abramchuk"},{id:56,link:"https://raw.githubusercontent.com/sindresorhus/awesome-electron/master/readme.md",repoName:"awesome-electron",description:"Useful resources for creating apps with Electron.",repoOwnerName:"sindresorhus",repoOwner:"Sindre Sorhus"},{id:57,link:"https://raw.githubusercontent.com/JacobWylie/Web-Dev-Learning-Resources/master/README.md",repoName:"Web-Dev-Learning-Resources",description:"Collection of my favorite web development resources for beginners and professionals alike.",repoOwnerName:"JacobWylie",repoOwner:"Jacob Wylie"},{id:58,link:"https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/master/README.md",repoName:"reactjs-interview-questions",description:"List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!",repoOwnerName:"sudheerj",repoOwner:"Sudheer Jonna"},{id:59,link:"https://raw.githubusercontent.com/sudheerj/angular-interview-questions/master/README.md",repoName:"angular-interview-questions",description:"List of 300 Angular Interview Questions and answers[WIP]",repoOwnerName:"sudheerj",repoOwner:"Sudheer Jonna"},{id:60,link:"https://raw.githubusercontent.com/sudheerj/javascript-interview-questions/master/README.md",repoName:"javascript-interview-questions",description:"List of 1000 JavaScript Interview Questions",repoOwnerName:"sudheerj",repoOwner:"Sudheer Jonna"},{id:61,link:"https://raw.githubusercontent.com/sudheerj/vuejs-interview-questions/master/README.md",repoName:"vuejs-interview-questions",description:"List of 300 VueJS Interview Questions And Answers",repoOwnerName:"sudheerj",repoOwner:"Sudheer Jonna"},{id:62,link:"https://raw.githubusercontent.com/neutraltone/awesome-stock-resources/master/README.md",repoName:"awesome-stock-resources",description:" A collection of links for free stock photography, video and Illustration websites",repoOwnerName:"neutraltone",repoOwner:"Tony Phipps"},{id:63,link:"https://raw.githubusercontent.com/LisaDziuba/Awesome-Design-Tools/master/README.md",repoName:"Awesome-Design-Tools",description:"The best design tools and plugins for everything point_right https://flawlessapp.io/designtools",repoOwnerName:"LisaDziuba",repoOwner:"Lisa Dziuba"},{id:64,link:"https://raw.githubusercontent.com/gztchan/awesome-design/master/README.md",repoName:"awesome-design",description:"Curated design resources. ",repoOwnerName:"gztchan",repoOwner:"Tony Chan"},{id:65,link:"https://raw.githubusercontent.com/MindorksOpenSource/android-interview-questions/master/README.md",repoName:"android-interview-questions",description:"Your Cheat Sheet For Android Interview - Android Interview Questions",repoOwnerName:"MindorksOpenSource",repoOwner:"MindOrks"},{id:66,link:"https://raw.githubusercontent.com/themesberg/pixel-bootstrap-ui-kit/master/README.md",repoName:"pixel-bootstrap-ui-kit",description:"Pixel Lite - Free Bootstrap 4 UI Kit that will help you prototype and design beautiful, creative and modern websites.",repoOwnerName:"themesberg",repoOwner:"Themesberg"},{id:67,link:"https://raw.githubusercontent.com/themesberg/windows-95-ui-kit/master/README.md",repoName:"windows-95-ui-kit",description:"\ud83d\udcbe Windows 95 UI Kit design made with Bootstrap 4 components",repoOwnerName:"themesberg",repoOwner:"Themesberg"},{id:68,link:"https://raw.githubusercontent.com/themesberg/neumorphism-ui-bootstrap/master/README.md",repoName:"neumorphism-ui-bootstrap",description:"Neumorphism design inspired UI Kit: web components, sections and pages in neumorphic style built with Bootstrap CSS Framework",repoOwnerName:"themesberg",repoOwner:"Themesberg"},{id:69,link:"https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md",repoName:"awesome",description:"Awesome lists about all kinds of interesting topics",repoOwnerName:"sindresorhus",repoOwner:"Sindre Sorhus"},{id:70,link:"https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md",repoName:"awesome-nodejs",description:"Delightful Node.js packages and resources https://node.cool",repoOwnerName:"sindresorhus",repoOwner:"Sindre Sorhus"},{id:71,link:"https://raw.githubusercontent.com/sorrycc/awesome-javascript/master/README.md",repoName:"awesome-javascript",description:" A collection of awesome browser-side JavaScript libraries, resources and shiny things.",repoOwnerName:"sorrycc",repoOwner:"chencheng (\u4e91\u8c26)"},{id:72,link:"https://raw.githubusercontent.com/uhub/awesome-javascript/master/README.md",repoName:"awesome-javascript",description:"A curated list of awesome JavaScript frameworks, libraries and software.",repoOwnerName:"uhub",repoOwner:"uhub"},{id:73,link:"https://raw.githubusercontent.com/micromata/awesome-javascript-learning/master/readme.md",repoName:"awesome-javascript-learning",description:"A tiny list limited to the best JavaScript Learning Resources",repoOwnerName:"micromata",repoOwner:"Micromata GmbH"},{id:74,link:"https://raw.githubusercontent.com/vinta/awesome-python/master/README.md",repoName:"awesome-python",description:"A curated list of awesome Python frameworks, libraries, software and resources",repoOwnerName:"vinta",repoOwner:"Vinta Chen"},{id:75,link:"https://raw.githubusercontent.com/akullpp/awesome-java/master/README.md",repoName:"awesome-java",description:"A curated list of awesome frameworks, libraries and software for the Java programming language.",repoOwnerName:"akullpp",repoOwner:"Andreas Kull"},{id:76,link:"https://raw.githubusercontent.com/avelino/awesome-go/master/README.md",repoName:"awesome-go",description:"A curated list of awesome Go frameworks, libraries and software https://awesome-go.com/",repoOwnerName:"avelino",repoOwner:"Avelino"},{id:77,link:"https://raw.githubusercontent.com/yissachar/awesome-dart/master/README.md",repoName:"awesome-dart",description:"A curated list of awesome Dart frameworks, libraries, and software",repoOwnerName:"yissachar",repoOwner:"yissachar"},{id:78,link:"https://raw.githubusercontent.com/rust-unofficial/awesome-rust/master/README.md",repoName:"awesome-rust",description:"A curated list of Rust code and resources.",repoOwnerName:"rust-unofficial",repoOwner:"rust-unofficial"},{id:79,link:"https://raw.githubusercontent.com/ForrestKnight/open-source-cs/master/README.md",repoName:"open-source-cs",description:"free courses from reputable universities like MIT, Stanford and Princeton that satisfy the same requirements as an undergraduate Computer Science degree.",repoOwnerName:"ForrestKnight",repoOwner:"Forrest Knight"},{id:80,link:"https://raw.githubusercontent.com/enaqx/awesome-react/master/README.md",repoName:"awesome-react",description:"A collection of awesome things regarding React ecosystem",repoOwnerName:"enaqx",repoOwner:"Nick Raienko"},{id:81,link:"https://raw.githubusercontent.com/awesome-css-group/awesome-css/master/README.md",repoName:"awesome-css",description:"A curated contents of amazing CSS :)",repoOwnerName:"awesome-css-group",repoOwner:"awesome-css-group"},{id:82,link:"https://raw.githubusercontent.com/PatrickJS/awesome-angular/gh-pages/README.md",repoName:"awesome-angular",description:" A curated list of awesome Angular resources",repoOwnerName:"PatrickJS",repoOwner:"PatrickJS"},{id:83,link:"https://raw.githubusercontent.com/veggiemonk/awesome-docker/master/README.md",repoName:"awesome-docker",description:"A curated list of Docker resources and projects https://awesome-docker.netlify.app",repoOwnerName:"veggiemonk",repoOwner:"Julien Bisconti"},{id:84,link:"https://raw.githubusercontent.com/lnishan/awesome-competitive-programming/master/README.md",repoName:"awesome-competitive-programming",description:"A curated list of awesome Competitive Programming, Algorithm and Data Structure resources http://codeforces.com/blog/entry/23054",repoOwnerName:"lnishan",repoOwner:"Jasmine Chen"},{id:85,link:"https://raw.githubusercontent.com/prakhar1989/awesome-courses/master/README.md",repoName:"awesome-courses",description:"List of awesome university courses for learning Computer Science!",repoOwnerName:"prakhar1989",repoOwner:"Prakhar Srivastav"},{id:86,link:"https://raw.githubusercontent.com/ossu/computer-science/master/README.md",repoName:"computer-science",description:"Path to a free self-taught education in Computer Science!",repoOwnerName:"ossu",repoOwner:"Open Source Society University"}]}}]);
//# sourceMappingURL=6.75c66953.chunk.js.map