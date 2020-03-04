!function(){"use strict";function e(e,t){var n,i,o,r,l=W;for(r=arguments.length;r-- >2;)P.push(arguments[r]);if(t&&null!=t.children){if(!P.length)P.push(t.children);delete t.children}while(P.length)if((i=P.pop())&&void 0!==i.pop)for(r=i.length;r--;)P.push(i[r]);else{if("boolean"==typeof i)i=null;if(o="function"!=typeof e)if(null==i)i="";else if("number"==typeof i)i=String(i);else if("string"!=typeof i)o=!1;if(o&&n)l[l.length-1]+=i;else if(l===W)l=[i];else l.push(i);n=o}var f=new T;f.nodeName=e;f.children=l;f.attributes=null==t?void 0:t;f.key=null==t?void 0:t.key;if(void 0!==M.vnode)M.vnode(f);return f}function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e,t){if(e)if("function"==typeof e)e(t);else e.current=t}function i(n,i){return e(n.nodeName,t(t({},n.attributes),i),arguments.length>2?[].slice.call(arguments,2):n.children)}function o(e){if(!e.__d&&(e.__d=!0)&&1==V.push(e))(M.debounceRendering||D)(r)}function r(){var e;while(e=V.pop())if(e.__d)x(e)}function l(e,t,n){if("string"==typeof t||"number"==typeof t)return void 0!==e.splitText;if("string"==typeof t.nodeName)return!e._componentConstructor&&f(e,t.nodeName);else return n||e._componentConstructor===t.nodeName}function f(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var n=t({},e.attributes);n.children=e.children;var i=e.nodeName.defaultProps;if(void 0!==i)for(var o in i)if(void 0===n[o])n[o]=i[o];return n}function a(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);n.__n=e;return n}function u(e){var t=e.parentNode;if(t)t.removeChild(e)}function c(e,t,i,o,r){if("className"===t)t="class";if("key"===t);else if("ref"===t){n(i,null);n(o,e)}else if("class"===t&&!r)e.className=o||"";else if("style"===t){if(!o||"string"==typeof o||"string"==typeof i)e.style.cssText=o||"";if(o&&"object"==typeof o){if("string"!=typeof i)for(var l in i)if(!(l in o))e.style[l]="";for(var l in o)e.style[l]="number"==typeof o[l]&&!1===E.test(l)?o[l]+"px":o[l]}}else if("dangerouslySetInnerHTML"===t){if(o)e.innerHTML=o.__html||""}else if("o"==t[0]&&"n"==t[1]){var f=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2);if(o){if(!i)e.addEventListener(t,p,f)}else e.removeEventListener(t,p,f);(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}if((null==o||!1===o)&&"spellcheck"!=t)e.removeAttribute(t)}else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));if(null==o||!1===o)if(s)e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase());else e.removeAttribute(t);else if("function"!=typeof o)if(s)e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o);else e.setAttribute(t,o)}}function p(e){return this.__l[e.type](M.event&&M.event(e)||e)}function _(){var e;while(e=A.shift()){if(M.afterMount)M.afterMount(e);if(e.componentDidMount)e.componentDidMount()}}function d(e,t,n,i,o,r){if(!H++){R=null!=o&&void 0!==o.ownerSVGElement;B=null!=e&&!("__preactattr_"in e)}var l=h(e,t,n,i,r);if(o&&l.parentNode!==o)o.appendChild(l);if(!--H){B=!1;if(!r)_()}return l}function h(e,t,n,i,o){var r=e,l=R;if(null==t||"boolean"==typeof t)t="";if("string"==typeof t||"number"==typeof t){if(e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)){if(e.nodeValue!=t)e.nodeValue=t}else{r=document.createTextNode(t);if(e){if(e.parentNode)e.parentNode.replaceChild(r,e);m(e,!0)}}r.__preactattr_=!0;return r}var s=t.nodeName;if("function"==typeof s)return N(e,t,n,i);R="svg"===s?!0:"foreignObject"===s?!1:R;s=String(s);if(!e||!f(e,s)){r=a(s,R);if(e){while(e.firstChild)r.appendChild(e.firstChild);if(e.parentNode)e.parentNode.replaceChild(r,e);m(e,!0)}}var u=r.firstChild,c=r.__preactattr_,p=t.children;if(null==c){c=r.__preactattr_={};for(var _=r.attributes,d=_.length;d--;)c[_[d].name]=_[d].value}if(!B&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling){if(u.nodeValue!=p[0])u.nodeValue=p[0]}else if(p&&p.length||null!=u)v(r,p,n,i,B||null!=c.dangerouslySetInnerHTML);g(r,t.attributes,c);R=l;return r}function v(e,t,n,i,o){var r,f,s,a,c,p=e.childNodes,_=[],d={},v=0,b=0,g=p.length,y=0,w=t?t.length:0;if(0!==g)for(var C=0;C<g;C++){var x=p[C],N=x.__preactattr_,k=w&&N?x._component?x._component.__k:N.key:null;if(null!=k){v++;d[k]=x}else if(N||(void 0!==x.splitText?o?x.nodeValue.trim():!0:o))_[y++]=x}if(0!==w)for(var C=0;C<w;C++){a=t[C];c=null;var k=a.key;if(null!=k){if(v&&void 0!==d[k]){c=d[k];d[k]=void 0;v--}}else if(b<y)for(r=b;r<y;r++)if(void 0!==_[r]&&l(f=_[r],a,o)){c=f;_[r]=void 0;if(r===y-1)y--;if(r===b)b++;break}c=h(c,a,n,i);s=p[C];if(c&&c!==e&&c!==s)if(null==s)e.appendChild(c);else if(c===s.nextSibling)u(s);else e.insertBefore(c,s)}if(v)for(var C in d)if(void 0!==d[C])m(d[C],!1);while(b<=y)if(void 0!==(c=_[y--]))m(c,!1)}function m(e,t){var i=e._component;if(i)k(i);else{if(null!=e.__preactattr_)n(e.__preactattr_.ref,null);if(!1===t||null==e.__preactattr_)u(e);b(e)}}function b(e){e=e.lastChild;while(e){var t=e.previousSibling;m(e,!0);e=t}}function g(e,t,n){var i;for(i in n)if((!t||null==t[i])&&null!=n[i])c(e,i,n[i],n[i]=void 0,R);for(i in t)if(!("children"===i||"innerHTML"===i||i in n&&t[i]===("value"===i||"checked"===i?e[i]:n[i])))c(e,i,n[i],n[i]=t[i],R)}function y(e,t,n){var i,o=F.length;if(e.prototype&&e.prototype.render){i=new e(t,n);S.call(i,t,n)}else{i=new S(t,n);i.constructor=e;i.render=w}while(o--)if(F[o].constructor===e){i.__b=F[o].__b;F.splice(o,1);return i}return i}function w(e,t,n){return this.constructor(e,n)}function C(e,t,i,r,l){if(!e.__x){e.__x=!0;e.__r=t.ref;e.__k=t.key;delete t.ref;delete t.key;if(void 0===e.constructor.getDerivedStateFromProps)if(!e.base||l){if(e.componentWillMount)e.componentWillMount()}else if(e.componentWillReceiveProps)e.componentWillReceiveProps(t,r);if(r&&r!==e.context){if(!e.__c)e.__c=e.context;e.context=r}if(!e.__p)e.__p=e.props;e.props=t;e.__x=!1;if(0!==i)if(1===i||!1!==M.syncComponentUpdates||!e.base)x(e,1,l);else o(e);n(e.__r,e)}}function x(e,n,i,o){if(!e.__x){var r,l,f,a=e.props,u=e.state,c=e.context,p=e.__p||a,h=e.__s||u,v=e.__c||c,b=e.base,g=e.__b,w=b||g,N=e._component,S=!1,U=v;if(e.constructor.getDerivedStateFromProps){u=t(t({},u),e.constructor.getDerivedStateFromProps(a,u));e.state=u}if(b){e.props=p;e.state=h;e.context=v;if(2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,u,c))S=!0;else if(e.componentWillUpdate)e.componentWillUpdate(a,u,c);e.props=a;e.state=u;e.context=c}e.__p=e.__s=e.__c=e.__b=null;e.__d=!1;if(!S){r=e.render(a,u,c);if(e.getChildContext)c=t(t({},c),e.getChildContext());if(b&&e.getSnapshotBeforeUpdate)U=e.getSnapshotBeforeUpdate(p,h);var L,T,P=r&&r.nodeName;if("function"==typeof P){var W=s(r);l=N;if(l&&l.constructor===P&&W.key==l.__k)C(l,W,1,c,!1);else{L=l;e._component=l=y(P,W,c);l.__b=l.__b||g;l.__u=e;C(l,W,0,c,!1);x(l,1,i,!0)}T=l.base}else{f=w;L=N;if(L)f=e._component=null;if(w||1===n){if(f)f._component=null;T=d(f,r,c,i||!b,w&&w.parentNode,!0)}}if(w&&T!==w&&l!==N){var D=w.parentNode;if(D&&T!==D){D.replaceChild(T,w);if(!L){w._component=null;m(w,!1)}}}if(L)k(L);e.base=T;if(T&&!o){var E=e,V=e;while(V=V.__u)(E=V).base=T;T._component=E;T._componentConstructor=E.constructor}}if(!b||i)A.push(e);else if(!S){if(e.componentDidUpdate)e.componentDidUpdate(p,h,U);if(M.afterUpdate)M.afterUpdate(e)}while(e.__h.length)e.__h.pop().call(e);if(!H&&!o)_()}}function N(e,t,n,i){var o=e&&e._component,r=o,l=e,f=o&&e._componentConstructor===t.nodeName,a=f,u=s(t);while(o&&!a&&(o=o.__u))a=o.constructor===t.nodeName;if(o&&a&&(!i||o._component)){C(o,u,3,n,i);e=o.base}else{if(r&&!f){k(r);e=l=null}o=y(t.nodeName,u,n);if(e&&!o.__b){o.__b=e;l=null}C(o,u,1,n,i);e=o.base;if(l&&e!==l){l._component=null;m(l,!1)}}return e}function k(e){if(M.beforeUnmount)M.beforeUnmount(e);var t=e.base;e.__x=!0;if(e.componentWillUnmount)e.componentWillUnmount();e.base=null;var i=e._component;if(i)k(i);else if(t){if(null!=t.__preactattr_)n(t.__preactattr_.ref,null);e.__b=t;u(t);F.push(e);b(t)}n(e.__r,null)}function S(e,t){this.__d=!0;this.context=t;this.props=e;this.state=this.state||{};this.__h=[]}function U(e,t,n){return d(n,e,{},!1,t,!1)}function L(){return{}}var T=function(){};var M={};var P=[];var W=[];var D="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var E=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;var V=[];var A=[];var H=0;var R=!1;var B=!1;var F=[];t(S.prototype,{setState:function(e,n){if(!this.__s)this.__s=this.state;this.state=t(t({},this.state),"function"==typeof e?e(this.state,this.props):e);if(n)this.__h.push(n);o(this)},forceUpdate:function(e){if(e)this.__h.push(e);x(this,2)},render:function(){}});var j={h:e,createElement:e,cloneElement:i,createRef:L,Component:S,render:U,rerender:r,options:M};if("undefined"!=typeof module)module.exports=j;else self.preact=j}();
//# sourceMappingURL=node_modules/preact/dist/preact.js.map