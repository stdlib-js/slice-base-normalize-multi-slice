<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# normalizeMultiSlice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Normalize a [`MultiSlice`][@stdlib/slice/multi] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import normalizeMultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-multi-slice@esm/index.mjs';
```

<a name="main"></a>

#### normalizeMultiSlice( slice, shape, strict )

Normalizes a [`MultiSlice`][@stdlib/slice/multi] object, where `shape` specifies the maximum allowed slice shape.

<!-- eslint-disable stdlib/no-redeclare, no-global-assign -->

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';

var shape = [ 10, 10, 10 ];

var s1 = new MultiSlice( new Slice( 2, null, 2 ), null, -4 );
var s2 = normalizeMultiSlice( s1, shape, false );
// returns <MultiSlice>

var d = s2.data;
// returns [ <Slice>, <Slice>, <Slice> ]

var v = d[ 0 ];
// returns <Slice>

var start = v.start;
// returns 2

var stop = v.stop;
// returns 10

var step = v.step;
// returns 2

v = d[ 1 ];
// returns <Slice>

start = v.start;
// returns 0

stop = v.stop;
// returns 10

step = v.step;
// returns 1

v = d[ 2 ];
// returns <Slice>

start = v.start;
// returns 6

stop = v.stop;
// returns 7

step = v.step;
// returns 1
```

When `strict` is `true`, the function returns an error object if an input slice exceeds index bounds.

```javascript
import Slice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';

var s1 = new MultiSlice( new Slice( -20, 20, 1 ) );
var s2 = normalizeMultiSlice( s1, [ 10 ], true );
// returns { 'code': 'ERR_SLICE_OUT_OF_BOUNDS' }
```

A returned error object may have one of the following error codes:

-   **ERR_SLICE_OUT_OF_BOUNDS**: a slice exceeds index bounds.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import S from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@esm/index.mjs';
import MultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@esm/index.mjs';
import normalizeMultiSlice from 'https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-normalize-multi-slice@esm/index.mjs';

var s1 = new MultiSlice( null, S(), -1 );
var s2 = normalizeMultiSlice( s1, [ 5, 10, 7 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( null );
s2 = normalizeMultiSlice( s1, [ 5 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( S( -1, null, -1 ), 3 );
s2 = normalizeMultiSlice( s1, [ 5, 5 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( 2, S( -10, -2, 2 ), 3, null );
s2 = normalizeMultiSlice( s1, [ 10, 10, 10, 10 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

s1 = new MultiSlice( S( 1, 20, 2 ), S( null, null, -1 ) );
s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
console.log( '%s => %s', s1.toString(), s2.toString() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base-normalize-multi-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base-normalize-multi-slice

[test-image]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base-normalize-multi-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base-normalize-multi-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base-normalize-multi-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base-normalize-multi-slice/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/tree/deno
[umd-url]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/tree/umd
[esm-url]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/tree/esm
[branches-url]: https://github.com/stdlib-js/slice-base-normalize-multi-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base-normalize-multi-slice/main/LICENSE

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi/tree/esm

</section>

<!-- /.links -->
