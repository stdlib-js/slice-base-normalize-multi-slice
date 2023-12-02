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

/* eslint-disable new-cap */

'use strict';

var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( './../lib' );

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
