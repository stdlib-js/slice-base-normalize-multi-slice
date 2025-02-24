// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function _(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,w,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,g,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var m=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,c,s,l,f,p,d,g,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-p.length)<0?p:p=g?p+v(h):v(h)+p)),c+=n.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function x(e){var r,t;if("string"!=typeof e)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var k=Object.prototype,F=k.toString,N=k.__defineGetter__,V=k.__defineSetter__,U=k.__lookupGetter__,A=k.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||A.call(e,r)?(n=e.__proto__,e.__proto__=k,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&V&&V.call(e,r,t.set),e};function B(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e,r,t){C(e,r,{configurable:!1,enumerable:!1,get:t})}function P(e){return"number"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return $&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,G=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof Z?Z.toStringTag:"",W=D()?function(e){var r,t,n,i,o;if(null==e)return M.call(e);t=e[J],o=J,r=null!=(i=e)&&G.call(i,o);try{e[J]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[J]=t:delete e[J],n}:function(e){return M.call(e)},z=Number,X=z.prototype.toString,Y=D();function q(e){return"object"==typeof e&&(e instanceof z||(Y?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object Number]"===W(e)))}function H(e){return P(e)||q(e)}B(H,"isPrimitive",P),B(H,"isObject",q);var K=Number.POSITIVE_INFINITY,Q=z.NEGATIVE_INFINITY,ee=Math.floor;function re(e){return e<K&&e>Q&&ee(r=e)===r;var r}function te(e){return P(e)&&re(e)}function ne(e){return q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function oe(e){return null===e}function ae(e){return void 0===e}function ue(e){return te(e)||oe(e)||ae(e)}function ce(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof ce))return new ce(r,t,n);if(!ue(r))throw new TypeError(x("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ue(t))throw new TypeError(x("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ue(n))throw new TypeError(x("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(x("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}function se(){return/^\s*function\s*([^(]*)/i}B(ie,"isPrimitive",te),B(ie,"isObject",ne),B(ce,"name","Slice"),L(ce.prototype,"start",(function(){return this._start})),L(ce.prototype,"stop",(function(){return this._stop})),L(ce.prototype,"step",(function(){return this._step})),B(ce.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),B(ce.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var le=/^\s*function\s*([^(]*)/i;B(se,"REGEXP",le);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===W(e)};function pe(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,i;if(("Object"===(t=W(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function ge(e){return te(e)||oe(e)||ae(e)||function(e){return e instanceof ce||"Slice"===de(e)}(e)}function he(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof he)){if(1===e)return new he(arguments[0]);if(2===e)return new he(arguments[0],arguments[1]);if(3===e)return new he(arguments[0],arguments[1],arguments[2]);if(4===e)return new he(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new he(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(he.prototype),he.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!ge(n=arguments[i]))throw new TypeError(x("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(n)));this._data.push(void 0===n?null:n)}return this}function ye(e,r,t){return null===e?new ce(0,r,1):"number"==typeof e?function(e,r,t){return e>=r?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new ce(r,r,1):e<0&&(e=r+e)<0?t?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new ce(0,0,1):new ce(e,e+1,1)}(e,r,t):function(e,r,t){var n,i,o;if(n=e.start,i=e.stop,null===(o=e.step)&&(o=1),null===n)n=o>0?0:r-1;else if(n<0){if((n=r+n)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=0}}else if(n>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};n=o<0?r-1:r}if(null===i)i=o>0?r:null;else if(i<0){if((i=r+i)<0)if(o>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=0}else{if(t&&i<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=null}}else if(i>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};i=r}return new ce(n,i,o)}(e,r,t)}return B(pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pe)),B(he,"name","MultiSlice"),L(he.prototype,"ndims",(function(){return this._data.length})),L(he.prototype,"data",(function(){return this._data.slice()})),B(he.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),B(he.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r})),function(e,r,t){var n,i,o,a;for(n=e.data,i=[],a=0;a<n.length;a++){if(void 0!==(o=ye(n[a],r[a],t)).code)return o;i.push(o)}return function(e){switch(e.length){case 0:return new he;case 1:return new he(e[0]);case 2:return new he(e[0],e[1]);case 3:return new he(e[0],e[1],e[2]);case 4:return new he(e[0],e[1],e[2],e[3]);case 5:return new he(e[0],e[1],e[2],e[3],e[4]);case 6:return new he(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new he(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return he.apply(null,e)}}(i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).normalizeMultiSlice=r();
//# sourceMappingURL=index.js.map
