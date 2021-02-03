/*! For license information please see 892a89cf.02d1d579.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(f,l(l({ref:t},b),{},{components:n})):a.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},108:function(e,t,n){"use strict";e.exports=n(109)},109:function(e,t,n){"use strict";var r=n(110),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,O=a?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var w=v.prototype=new N;w.constructor=v,r(w,g.prototype),w.isPureReactComponent=!0;var P={current:null},C=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var b=Array(i),u=0;u<i;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:P.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,_=[];function R(e,t,n,r){if(_.length){var a=_.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function A(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return n(r,e,""===t?"."+q(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var b=t+q(a=e[i],i);l+=A(a,b,n,r)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=j&&e[j]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),i=0;!(a=e.next()).done;)l+=A(a=a.value,b=t+q(a,i++),n,r);else if("object"===a)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function $(e,t,n){return null==e?0:A(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function B(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(E,"$&/")+"/"),$(e,I,t=R(t,o,r,a)),T(t)}var L={current:null};function M(){var e=L.current;if(null===e)throw Error(m(321));return e}var U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return B(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,D,t=R(null,null,t,n)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(m(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=b,t.PureComponent=v,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var a=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=P.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)C.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){b=Array(u);for(var p=0;p<u;p++)b[p]=arguments[p+2];a.children=b}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,n){return M().useReducer(e,t,n)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},110:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,i=c(e),b=1;b<arguments.length;b++){for(var u in n=Object(arguments[b]))a.call(n,u)&&(i[u]=n[u]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(i[l[p]]=n[l[p]])}}return i}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(108),n(107)),c={id:"ActionButton",title:"ActionButton"},l={unversionedId:"components/ActionButton",id:"components/ActionButton",isDocsHomePage:!1,title:"ActionButton",description:"Props",source:"@site/../docs/components/ActionButton.md",slug:"/components/ActionButton",permalink:"/react-native-basic-ui/components/ActionButton",editUrl:"https://github.com/janziemba/react-native-basic-ui/edit/master/website/../docs/components/ActionButton.md",version:"current",sidebar:"main",previous:{title:"Default theme",permalink:"/react-native-basic-ui/getting-started/default-theme"},next:{title:"AdjustableContainer",permalink:"/react-native-basic-ui/components/AdjustableContainer"}},i=[{value:"Props",id:"props",children:[{value:"<code>color</code>",id:"color",children:[]},{value:"<code>iconProps</code>",id:"iconprops",children:[]},{value:"<code>isDisabled</code>",id:"isdisabled",children:[]},{value:"<code>linearGradient</code>",id:"lineargradient",children:[]},{value:"<code>linearGradientProps</code>",id:"lineargradientprops",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>scalableProps</code>",id:"scalableprops",children:[]},{value:"<code>text</code>",id:"text",children:[]},{value:"<code>textProps</code>",id:"textprops",children:[]}]}],b={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"color"},Object(o.b)("inlineCode",{parentName:"h3"},"color")),Object(o.b)("p",null,"A color of the button. The default value is ",Object(o.b)("inlineCode",{parentName:"p"},"primary"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"enum('black', 'danger', 'dark', 'disabled', 'facebook', 'google', 'info', 'light', 'primary', 'success', 'twitter', 'warning', 'white')"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"iconprops"},Object(o.b)("inlineCode",{parentName:"h3"},"iconProps")),Object(o.b)("p",null,"Icon props. Check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-basic-ui/components/Icon#props"}),"Icon documentation"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"isdisabled"},Object(o.b)("inlineCode",{parentName:"h3"},"isDisabled")),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the button is not pressable. The default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"lineargradient"},Object(o.b)("inlineCode",{parentName:"h3"},"linearGradient")),Object(o.b)("p",null,"A linear gradient of the button."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"enum('danger', 'info', 'primary', 'success', 'warning')"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"lineargradientprops"},Object(o.b)("inlineCode",{parentName:"h3"},"linearGradientProps")),Object(o.b)("p",null,"LinearGradient props. Check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-basic-ui/components/LinearGradient#props"}),"LinearGradient documentation"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"onpress"},Object(o.b)("inlineCode",{parentName:"h3"},"onPress")),Object(o.b)("p",null,"Called when a single tap gesture is detected."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"function"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h3",{id:"scalableprops"},Object(o.b)("inlineCode",{parentName:"h3"},"scalableProps")),Object(o.b)("p",null,"Scalable props. Check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-basic-ui/components/Scalable#props"}),"Scalable documentation"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("h3",{id:"text"},Object(o.b)("inlineCode",{parentName:"h3"},"text")),Object(o.b)("p",null,"A text of the button."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h3",{id:"textprops"},Object(o.b)("inlineCode",{parentName:"h3"},"textProps")),Object(o.b)("p",null,"Text props. Check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-basic-ui/components/Text#props"}),"Text documentation"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")))))}u.isMDXComponent=!0}}]);