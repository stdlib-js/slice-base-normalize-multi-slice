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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof normalizeMultiSlice, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes a MultiSlice object (nulls)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shapes;
	var s;
	var i;

	shapes = [
		[ 10 ],
		[ 10, 20 ],
		[ 10, 20, 5 ]
	];

	values = [
		new MultiSlice( null ),
		new MultiSlice( null, null ),
		new MultiSlice( null, null, null )
	];
	expected = [
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ), new Slice( 0, 20, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ), new Slice( 0, 20, 1 ), new Slice( 0, 5, 1 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];

		// Non-strict mode:
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], false );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shapes[ i ].length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );

		// Strict mode:
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], true );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shapes[ i ].length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function normalizes a MultiSlice object (integers)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shapes;
	var s;
	var i;

	shapes = [
		[ 10 ],
		[ 10, 20 ],
		[ 10, 20, 5 ]
	];

	values = [
		new MultiSlice( 5 ),
		new MultiSlice( -4, 10 ),
		new MultiSlice( -4, -1, 3 )
	];
	expected = [
		new MultiSlice( new Slice( 5, 6, 1 ) ),
		new MultiSlice( new Slice( 6, 7, 1 ), new Slice( 10, 11, 1 ) ),
		new MultiSlice( new Slice( 6, 7, 1 ), new Slice( 19, 20, 1 ), new Slice( 3, 4, 1 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];

		// Non-strict mode:
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], false );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shapes[ i ].length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );

		// Strict mode:
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], true );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shapes[ i ].length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function normalizes a MultiSlice object (Slices)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shape;
	var s;
	var i;

	shape = [ 10 ];

	values = [
		new MultiSlice( new Slice() ),
		new MultiSlice( new Slice( 10 ) ),
		new MultiSlice( new Slice( 2, 10 ) ),
		new MultiSlice( new Slice( 2, null ) ),
		new MultiSlice( new Slice( null, 10 ) ),
		new MultiSlice( new Slice( -2 ) ),
		new MultiSlice( new Slice( -5, -2 ) ),
		new MultiSlice( new Slice( -5, null ) ),
		new MultiSlice( new Slice( null, null, null ) ),
		new MultiSlice( new Slice( 2, 10, 2 ) ),
		new MultiSlice( new Slice( -2, -10, -2 ) ),
		new MultiSlice( new Slice( -2, -11, -2 ) ),
		new MultiSlice( new Slice( null, 10, 2 ) ),
		new MultiSlice( new Slice( 2, null, 2 ) ),
		new MultiSlice( new Slice( 2, 10, null ) ),
		new MultiSlice( new Slice( null, null, 2 ) ),
		new MultiSlice( new Slice( 2, null, null ) ),
		new MultiSlice( new Slice( null, 10, null ) ),
		new MultiSlice( new Slice( -1, null, -2 ) )
	];
	expected = [
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 2, 10, 1 ) ),
		new MultiSlice( new Slice( 2, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 8, 1 ) ),
		new MultiSlice( new Slice( 5, 8, 1 ) ),
		new MultiSlice( new Slice( 5, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 2, 10, 2 ) ),
		new MultiSlice( new Slice( 8, 0, -2 ) ),
		new MultiSlice( new Slice( 8, null, -2 ) ),
		new MultiSlice( new Slice( 0, 10, 2 ) ),
		new MultiSlice( new Slice( 2, 10, 2 ) ),
		new MultiSlice( new Slice( 2, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 2 ) ),
		new MultiSlice( new Slice( 2, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 9, null, -2 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];

		// Non-strict mode:
		actual = normalizeMultiSlice( values[ i ], shape, false );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shape.length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );

		// Strict mode:
		actual = normalizeMultiSlice( values[ i ], shape, true );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shape.length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function normalizes a MultiSlice object (out-of-bounds, non-strict, integers)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shapes;
	var s;
	var i;

	shapes = [
		[ 10 ],
		[ 10 ],
		[ 10, 5 ],
		[ 5, 10, 7, 4 ]
	];

	values = [
		new MultiSlice( 12 ),
		new MultiSlice( -15 ),
		new MultiSlice( 3, 8 ),
		new MultiSlice( -6, 12, -10, 2 )
	];
	expected = [
		new MultiSlice( new Slice( 10, 10, 1 ) ),
		new MultiSlice( new Slice( 0, 0, 1 ) ),
		new MultiSlice( new Slice( 3, 4, 1 ), new Slice( 5, 5, 1 ) ),
		new MultiSlice( new Slice( 0, 0, 1 ), new Slice( 10, 10, 1 ), new Slice( 0, 0, 1 ), new Slice( 2, 3, 1 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], false );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shapes[ i ].length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'the function normalizes a MultiSlice object (out-of-bounds, non-strict, Slices)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shape;
	var s;
	var i;

	shape = [ 10 ];

	values = [
		new MultiSlice( new Slice( -20, null, 1 ) ),
		new MultiSlice( new Slice( null, -20, -1 ) ),
		new MultiSlice( new Slice( 20, 30, 1 ) ),
		new MultiSlice( new Slice( 2, 30, 1 ) ),
		new MultiSlice( new Slice( 20, -20, -1 ) ),
		new MultiSlice( new Slice( -20, 20, null ) ),
		new MultiSlice( new Slice( 20, null, -1 ) ),
		new MultiSlice( new Slice( null, -20, 1 ) ),
		new MultiSlice( new Slice( -30, -20, 1 ) )
	];
	expected = [
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 9, null, -1 ) ),
		new MultiSlice( new Slice( 10, 10, 1 ) ),
		new MultiSlice( new Slice( 2, 10, 1 ) ),
		new MultiSlice( new Slice( 9, null, -1 ) ),
		new MultiSlice( new Slice( 0, 10, 1 ) ),
		new MultiSlice( new Slice( 9, null, -1 ) ),
		new MultiSlice( new Slice( 0, 0, 1 ) ),
		new MultiSlice( new Slice( 0, 0, 1 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		s = expected[ i ];
		actual = normalizeMultiSlice( values[ i ], shape, false );
		t.strictEqual( isMultiSlice( actual ), true, 'returns expected value' );
		t.strictEqual( actual.ndims, shape.length, 'returns expected value' );
		t.strictEqual( actual.toString(), s.toString(), 'returns expected value. actual: ' + actual.toString() + '. expected: ' + s.toString() + '.' );
	}
	t.end();
});

tape( 'in strict mode, the function returns an error object when a slice exceeds index bounds (integers)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shapes;
	var i;

	shapes = [
		[ 10 ],
		[ 10 ],
		[ 10, 5 ],
		[ 5, 10, 7, 4 ]
	];

	values = [
		new MultiSlice( 12 ),
		new MultiSlice( -15 ),
		new MultiSlice( 3, 8 ),
		new MultiSlice( -6, 12, -10, 2 )
	];
	expected = {
		'code': 'ERR_SLICE_OUT_OF_BOUNDS'
	};

	for ( i = 0; i < values.length; i++ ) {
		actual = normalizeMultiSlice( values[ i ], shapes[ i ], true );
		t.deepEqual( actual, expected, 'returns expected value for ' + values[ i ].toString() );
	}
	t.end();
});

tape( 'in strict mode, the function returns an error object when a slice exceeds index bounds (Slices)', function test( t ) {
	var expected;
	var actual;
	var values;
	var shape;
	var i;

	shape = [ 10 ];

	values = [
		new MultiSlice( new Slice( -20, null, 1 ) ),
		new MultiSlice( new Slice( null, -20, -1 ) ),
		new MultiSlice( new Slice( 20, 30, 1 ) ),
		new MultiSlice( new Slice( 2, 30, 1 ) ),
		new MultiSlice( new Slice( 20, -20, -1 ) ),
		new MultiSlice( new Slice( -20, 20, null ) ),
		new MultiSlice( new Slice( 20, null, -1 ) ),
		new MultiSlice( new Slice( null, -20, 1 ) ),
		new MultiSlice( new Slice( -30, -20, 1 ) )
	];
	expected = {
		'code': 'ERR_SLICE_OUT_OF_BOUNDS'
	};

	for ( i = 0; i < values.length; i++ ) {
		actual = normalizeMultiSlice( values[ i ], shape, true );
		t.deepEqual( actual, expected, 'returns expected value for ' + values[ i ].toString() );
	}
	t.end();
});
