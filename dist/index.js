"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=s(function(z,c){
function q(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}c.exports=q
});var p=s(function(h,m){
var w=require('@stdlib/slice-base-args2multislice/dist'),n=require('@stdlib/slice-ctor/dist'),O=require('@stdlib/slice-base-normalize-slice/dist'),d=a();function S(r,e,i){return r===null?new n(0,e,1):typeof r=="number"?r>=e?i?d():new n(e,e,1):r<0?(r=e+r,r<0?i?d():new n(0,0,1):new n(r,r+1,1)):new n(r,r+1,1):O(r,e,i)}function _(r,e,i){var o,f,u,t;for(o=r.data,f=[],t=0;t<o.length;t++){if(u=S(o[t],e[t],i),u.code!==void 0)return u;f.push(u)}return w(f)}m.exports=_
});var g=p();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
