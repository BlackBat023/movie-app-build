(function(e){function t(t){for(var n,i,a=t[0],u=t[1],l=t[2],s=0,b=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,a=1;a<c.length;a++){var u=c[a];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=u;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"06b7":function(e,t,c){},3170:function(e,t,c){},"3f5e":function(e,t,c){"use strict";c("06b7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=Object(n["f"])("h1",null,[Object(n["e"])("Movies"),Object(n["f"])("span",null,"App")],-1);function o(e,t){var c=Object(n["u"])("router-link"),o=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["f"])("header",null,[Object(n["f"])(c,{to:"/"},{default:Object(n["A"])((function(){return[r]})),_:1})]),Object(n["f"])("main",null,[Object(n["f"])(o)])],64)}c("a0f2");const i={};i.render=o;var a=i,u=c("6c02"),l=(c("ac1f"),c("841c"),{class:"home"}),f={class:"feature-card"},s=Object(n["f"])("img",{src:"https://images.all-free-download.com/images/graphicthumb/movie_poster_background_art_vector_530172.jpg",alt:"Naruto poster",class:"featured-img"},null,-1),b=Object(n["f"])("div",{class:"detail"},[Object(n["f"])("h3",null,"Welcome"),Object(n["f"])("p",null," This movie app makes use of the opensource movie database. Please search your desired movie by title keyword below to access all relevant information about the title. ")],-1),p=Object(n["f"])("input",{type:"submit",value:"Search"},null,-1),j={class:"movies-list"},O={class:"product-image"},d={class:"type"},v={class:"detail"},m={class:"year"};function h(e,t,c,r,o,i){var a=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",l,[Object(n["f"])("div",f,[Object(n["f"])(a,{to:"/movie/tt0409591"},{default:Object(n["A"])((function(){return[s,b]})),_:1})]),Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["C"])((function(e){return r.SearchMovies()}),["prevent"])),class:"search-box"},[Object(n["B"])(Object(n["f"])("input",{type:"text",placeholder:"what are you looking for...","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e})},null,512),[[n["y"],r.search]]),p],32),Object(n["f"])("div",j,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(r.movies,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"movie",key:e.imdbID},[Object(n["f"])(a,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:Object(n["A"])((function(){return[Object(n["f"])("div",O,[Object(n["f"])("img",{src:e.Poster,alt:"Movie Poster"},null,8,["src"]),Object(n["f"])("div",d,Object(n["w"])(e.Type),1)]),Object(n["f"])("div",v,[Object(n["f"])("p",m,Object(n["w"])(e.Year),1),Object(n["f"])("h3",null,Object(n["w"])(e.Title),1)])]})),_:2},1032,["to"])])})),128))])])}c("99af"),c("d3b7");var y={apikey:"e29ce011"},w={setup:function(){var e=Object(n["s"])(""),t=Object(n["s"])([]),c=function(){""!=e.value&&fetch("http://www.omdbapi.com/?apikey=".concat(y.apikey,"&s=").concat(e.value)).then((function(e){return e.json()})).then((function(c){t.value=c.Search,e.value=""}))};return{search:e,movies:t,SearchMovies:c}}};c("da2e");w.render=h;var g=w,k={class:"movie-detail"};function _(e,t,c,r,o,i){return Object(n["p"])(),Object(n["d"])("div",k,[Object(n["f"])("h2",null,Object(n["w"])(r.movie.Title),1),Object(n["f"])("p",null,Object(n["w"])(r.movie.Year),1),Object(n["f"])("img",{src:r.movie.Poster,alt:"Movie Poster",class:"featured-img"},null,8,["src"]),Object(n["f"])("p",null,Object(n["w"])(r.movie.Plot),1),Object(n["f"])("p",null,[Object(n["f"])("ul",null,[Object(n["f"])("li",null,"Starring: "+Object(n["w"])(r.movie.Actors)+".",1),Object(n["f"])("li",null,"Director: "+Object(n["w"])(r.movie.Director)+".",1),Object(n["f"])("li",null,"Rated: "+Object(n["w"])(r.movie.Rated)+".",1),Object(n["f"])("li",null,"Runtime: "+Object(n["w"])(r.movie.Runtime)+".",1),Object(n["f"])("li",null,"Rating: "+Object(n["w"])(r.movie.imdbRating)+".",1)])])])}var P={setup:function(){var e=Object(n["s"])({}),t=Object(u["c"])();return Object(n["m"])((function(){fetch("http://www.omdbapi.com/?apikey=".concat(y.apikey,"&i=").concat(t.params.id,"&plot=full")).then((function(e){return e.json()})).then((function(t){e.value=t}))})),{movie:e,route:t}}};c("3f5e");P.render=_;var S=P,M=[{path:"/",name:"Home",component:g},{path:"/movie/:id",name:"Movie Detail",component:S}],x=Object(u["a"])({history:Object(u["b"])("/"),routes:M}),R=x;Object(n["c"])(a).use(R).mount("#app")},"742d":function(e,t,c){},a0f2:function(e,t,c){"use strict";c("3170")},da2e:function(e,t,c){"use strict";c("742d")}});
//# sourceMappingURL=app.9762d555.js.map