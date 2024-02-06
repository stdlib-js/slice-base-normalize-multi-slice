"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=c(function(z,o){
var l=require('@stdlib/slice-base-args2multislice/dist'),f=require('@stdlib/slice-ctor/dist'),v=require('@stdlib/slice-base-normalize-slice/dist'),m=require('@stdlib/slice-base-int2slice/dist');function q(e,r,t){return e===null?new f(0,r,1):typeof e=="number"?m(e,r,t):v(e,r,t)}function d(e,r,t){var n,u,a,i;for(n=e.data,u=[],i=0;i<n.length;i++){if(a=q(n[i],r[i],t),a.code!==void 0)return a;u.push(a)}return l(u)}o.exports=d
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
