(window.webpackJsonp=window.webpackJsonp||[]).push([[2,1],{139:function(e,t,n){"use strict";n.r(t);var a=n(8),r=(n(0),n(144)),i="hsl(0, 0%, 90%)",o="hsl(0, 0%, 100%)",u=Object(a.a)("display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;background-color:",i,";overflow:hidden;"),s=Object(a.a)("background-color:",o,";","border-radius: 10px",";","box-shadow: 0 5px 50px rgba(0, 0, 0, 0.3)",";display:flex;align-items:center;justify-content:center;@media screen and (orientation:portrait){width:calc(100vw - 100px);height:calc(100vw - 100px);}@media screen and (orientation:landscape){width:calc(100vh - 100px);height:calc(100vh - 100px);}"),c=function(e){var t=e.children;return Object(a.b)("div",{css:u},Object(a.b)("div",{css:s},t))};t.default=function(){return Object(a.b)(c,null,Object(a.b)(r.Link,{to:"/test"},"Kevin Nguyen"))}},140:function(e,t,n){"use strict";n.r(t);var a=n(8),r=(n(0),n(139));t.default=function(){return Object(a.b)(r.default,null)}},143:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(146)),i=a(n(54)),o=a(n(7)),u=a(n(51)),s=a(n(52)),c=a(n(4)),l=a(n(0)),d=n(24),f=n(144);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var b=p(n);return l.default.createElement(d.Link,(0,i.default)({to:b,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:h})),!0}},v))},t}(l.default.Component);v.propTypes=(0,i.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var b=l.default.forwardRef(function(e,t){return l.default.createElement(v,(0,i.default)({innerRef:t},e))});t.default=b;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(8),r=n(0),i=n.n(r),o=n(4),u=n.n(o),s=n(143),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(145),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(33);n.d(t,"parsePath",function(){return f.a});var p=i.a.createContext({}),h=function(e){return Object(a.b)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t,n){"use strict";n.r(t);n(53);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-65ef45e9a65507fd57f3.js.map