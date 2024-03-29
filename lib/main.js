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

'use strict';

// MODULES //

var args2multislice = require( '@stdlib/slice-base-args2multislice' );
var Slice = require( '@stdlib/slice-ctor' );
var normalizeSlice = require( '@stdlib/slice-base-normalize-slice' );
var int2slice = require( '@stdlib/slice-base-int2slice' );


// FUNCTIONS //

/**
* Normalizes an individual MultiSlice element.
*
* @private
* @param {(Slice|integer|null)} value - input slice
* @param {NonNegativeInteger} len - maximum number of elements which are allowed in a slice
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {Slice} slice object
*/
function normalize( value, len, strict ) {
	// Case: null
	if ( value === null ) {
		// Create a slice with default extents and a default increment:
		return new Slice( 0, len, 1 );
	}
	// Case: integer
	if ( typeof value === 'number' ) {
		return int2slice( value, len, strict );
	}
	// Case: slice
	return normalizeSlice( value, len, strict );
}


// MAIN //

/**
* Returns a normalized MultiSlice object.
*
* @param {MultiSlice} slice - input slice
* @param {NonNegativeIntegerArray} shape - maximum allowed slice shape
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {(MultiSlice|ErrorObject)} multi-slice object or an error object
*
* @example
* var Slice = require( '@stdlib/slice-ctor' );
* var MultiSlice = require( '@stdlib/slice-multi' );
*
* var shape = [ 10, 10, 10 ];
*
* var s1 = new MultiSlice( new Slice( 2, null, 2 ), null, -4 );
* var s2 = normalizeMultiSlice( s1, shape, false );
* // returns <MultiSlice>
*
* var d = s2.data;
* // returns [ <Slice>, <Slice>, <Slice> ]
*
* var v = d[ 0 ];
* // returns <Slice>
*
* var start = v.start;
* // returns 2
*
* var stop = v.stop;
* // returns 10
*
* var step = v.step;
* // returns 2
*
* v = d[ 1 ];
* // returns <Slice>
*
* start = v.start;
* // returns 0
*
* stop = v.stop;
* // returns 10
*
* step = v.step;
* // returns 1
*
* v = d[ 2 ];
* // returns <Slice>
*
* start = v.start;
* // returns 6
*
* stop = v.stop;
* // returns 7
*
* step = v.step;
* // returns 1
*/
function normalizeMultiSlice( slice, shape, strict ) {
	var data;
	var args;
	var s;
	var i;

	data = slice.data;
	args = [];
	for ( i = 0; i < data.length; i++ ) {
		s = normalize( data[ i ], shape[ i ], strict );
		if ( s.code !== void 0 ) {
			return s;
		}
		args.push( s );
	}

	// Return a normalized slice:
	return args2multislice( args );
}


// EXPORTS //

module.exports = normalizeMultiSlice;
