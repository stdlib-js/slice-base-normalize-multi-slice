"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=c(function(z,o){"use strict";var l=require("@stdlib/slice-base-args2multislice"),f=require("@stdlib/slice-ctor"),v=require("@stdlib/slice-base-normalize-slice"),m=require("@stdlib/slice-base-int2slice");function q(e,r,t){return e===null?new f(0,r,1):typeof e=="number"?m(e,r,t):v(e,r,t)}function d(e,r,t){var n,u,a,i;for(n=e.data,u=[],i=0;i<n.length;i++){if(a=q(n[i],r[i],t),a.code!==void 0)return a;u.push(a)}return l(u)}o.exports=d});var p=s();module.exports=p;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
