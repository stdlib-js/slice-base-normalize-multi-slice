// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@v0.1.0-esm/index.mjs";function n(e,n,i){return null===e?new s(0,n,1):"number"==typeof e?e>=n?i?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new s(n,n,1):e<0&&(e=n+e)<0?i?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:new s(0,0,1):new s(e,e+1,1):t(e,n,i)}function i(s,t,i){var r,d,l,o;for(r=s.data,d=[],o=0;o<r.length;o++){if(void 0!==(l=n(r[o],t[o],i)).code)return l;d.push(l)}return e(d)}export{i as default};
//# sourceMappingURL=index.mjs.map
