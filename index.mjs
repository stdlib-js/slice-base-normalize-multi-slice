// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-slice@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-int2slice@esm/index.mjs";function n(e,n,r){return null===e?new s(0,n,1):"number"==typeof e?i(e,n,r):t(e,n,r)}function r(s,t,i){var r,l,d,m;for(r=s.data,l=[],m=0;m<r.length;m++){if(void 0!==(d=n(r[m],t[m],i)).code)return d;l.push(d)}return e(l)}export{r as default};
//# sourceMappingURL=index.mjs.map
