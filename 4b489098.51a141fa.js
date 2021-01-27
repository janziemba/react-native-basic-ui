/*! For license information please see 4b489098.51a141fa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return v})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return O}));var r=n(3),o=n(7),a=(n(108),n(107)),c=n(0),u=n.n(c),i=n(122),l=n(112),s=n(80),f=n.n(s);const p=37,y=39;var b=function(e){const{lazy:t,block:n,defaultValue:r,values:o,groupId:a,className:s}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(i.a)(),[m,v]=Object(c.useState)(r),h=c.Children.toArray(e.children);if(null!=a){const e=b[a];null!=e&&e!==m&&o.some((t=>t.value===e))&&v(e)}const g=e=>{v(e),null!=a&&d(a,e)},O=[];return u.a.createElement("div",null,u.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},s)},o.map((({value:e,label:t})=>u.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(l.a)("tabs__item",f.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case y:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(c.cloneElement)(h.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):u.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==m})))))};var d=function({children:e,hidden:t,className:n}){return u.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)},m={id:"installation",title:"Installation"},v={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"`bash npm2yarn",source:"@site/../docs/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/getting-started/installation",editUrl:"https://github.com/janziemba/react-native-basic-ui/edit/master/website/../docs/getting-started/installation.md",version:"current",sidebar:"main",previous:{title:"React Native Basic UI",permalink:"/"},next:{title:"Usage",permalink:"/getting-started/usage"}},h=[],g={toc:h};function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(a.b)(d,{value:"npm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-native-basic-ui\n"))),Object(a.b)(d,{value:"yarn",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-basic-ui\n")))),Object(a.b)("p",null,"Also, complete installation of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"react-native-vector-icons")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-native-linear-gradient/react-native-linear-gradient#installation"}),"react-native-linear-gradient"),", otherwise you won't be able to use the Icon component and linear gradients."))}O.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),y=r,b=f["".concat(c,".").concat(y)]||f[y]||p[y]||a;return n?o.a.createElement(b,u(u({ref:t},l),{},{components:n})):o.a.createElement(b,u({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},108:function(e,t,n){"use strict";e.exports=n(109)},109:function(e,t,n){"use strict";var r=n(110),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var E={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},c=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:E.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g,$=[];function N(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return n(r,e,""===t?"."+A(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+A(o=e[i],i);u+=I(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=I(o=o.value,l=t+A(o,i++),n,r);else if("object"===o)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return u}function T(e,t,n){return null==e?0:I(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(_,"$&/")+"/"),T(e,U,t=N(t,a,r,o)),R(t)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,D,t=N(null,null,t,n)),R(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=l,t.PureComponent=w,t.StrictMode=i,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var o=r({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},110:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,i=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(i[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(i[u[f]]=n[u[f]])}}return i}},112:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},122:function(e,t,n){"use strict";var r=n(0),o=n(123);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o}}]);