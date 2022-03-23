(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),n=(c(13),c(8)),a=c(2),d=c(1),l=(c(14),c(15),c(16),c(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:null===t||void 0===t?void 0:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:null===t||void 0===t?void 0:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[null===t||void 0===t?void 0:t.Plot,Object(l.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbID)}))})},j=(c(18),c(7)),m=c.n(j),b=function(e){var t=e.onAddMovie,c=e.movieIsAdded,i=e.setMovieISAdded,s=Object(d.useState)(""),n=Object(a.a)(s,2),o=n[0],j=n[1],b=Object(d.useState)(),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(d.useState)(!1),x=Object(a.a)(O,2),f=x[0],N=x[1],p=Object(d.useState)(!1),g=Object(a.a)(p,2),w=g[0],y=g[1],I=function(){N(!0),function(e){return fetch("https://www.omdbapi.com/?apikey=1061a671&t=".concat(e)).then((function(e){return e.json()})).then((function(e){if(e.Error)throw new Error("Error");return e}))}(o).then((function(e){h(e),N(!1)})).catch((function(){N(!1),y(!0)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){h(void 0),i(!1),j(e.target.value),y(!1)},id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":w})})}),w?Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}):Object(l.jsx)(l.Fragment,{children:f&&Object(l.jsx)("p",{className:"help",children:"Loading..."})})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return I()},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){return v&&t(v),j(""),void h(void 0)},children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[c&&Object(l.jsx)("p",{className:"help is-danger",children:"This movie is alredy added"}),v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(r,{movie:v})]})]})]})},u=function(){var e=Object(d.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(d.useState)(!1),r=Object(a.a)(s,2),j=r[0],m=r[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{onAddMovie:function(e){c.some((function(t){return t.imdbID===e.imdbID}))?m(!0):(m(!1),i([].concat(Object(n.a)(c),[e])))},movieIsAdded:j,setMovieISAdded:m})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.67c90047.chunk.js.map