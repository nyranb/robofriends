(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 tc",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{className:"tc",children:t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=(n(14),function(e){var t=e.searchChange;return Object(u.jsx)("input",{type:"search",className:"search",placeholder:"Search Robots",onChange:t})}),f=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"500px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooops, it seems we have a problem"}):this.props.children}}]),n}(r.Component),p=(n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(d,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(j,{robots:r})})})]}):Object(u.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(16);o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.28acfc6c.chunk.js.map