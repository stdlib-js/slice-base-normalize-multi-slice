"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=s(function(g,c){
function q(){return{code:"ERR_OUT_OF_BOUNDS"}}c.exports=q
});var m=s(function(h,d){
var w=require('@stdlib/slice-multi/dist'),t=require('@stdlib/slice-ctor/dist'),O=require('@stdlib/slice-base-normalize-slice/dist'),p=a();function S(r,e,i){return r===null?new t(0,e,1):typeof r=="number"?r>=e?i?p():new t(e,e,1):r<0?(r=e+r,r<0?i?p():new t(0,0,1):new t(r,r+1,1)):new t(r,r+1,1):O(r,e,i)}function x(r,e,i){var o,f,u,n;for(o=r.data,f=[],n=0;n<o.length;n++){if(u=S(o[n],e[n],i),u.code!==void 0)return u;f.push(u)}return w.apply(null,f)}d.exports=x
});var z=m();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
