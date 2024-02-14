/*
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

import MultiSlice = require( '@stdlib/slice-multi' );
import normalizeMultiSlice = require( './index' );


// TESTS //

// The function returns a MultiSlice object or an error object...
{
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], false ); // $ExpectType SliceResult
	normalizeMultiSlice( new MultiSlice( null, null, -2 ), [ 10, 10, 10 ], false ); // $ExpectType SliceResult

	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], true ); // $ExpectType SliceResult
	normalizeMultiSlice( new MultiSlice( null, null, -2 ), [ 10, 10, 10 ], true ); // $ExpectType SliceResult
}

// The compiler throws an error if the function is provided a first argument which is not a slice object...
{
	normalizeMultiSlice( '1', [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( 1, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( true, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( false, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( null, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( undefined, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( [], [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( {}, [ 10, 10, 10 ], false ); // $ExpectError
	normalizeMultiSlice( ( x: number ): number => x, [ 10, 10, 10 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection of numbers...
{
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), '1', false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), 1, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), true, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), false, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), null, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), undefined, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), {}, false ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], '1' ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], 1 ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], null ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], undefined ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], [] ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], {} ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	normalizeMultiSlice(); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ) ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ] ); // $ExpectError
	normalizeMultiSlice( new MultiSlice( 0, 10, 2 ), [ 10, 10, 10 ], false, {} ); // $ExpectError
}
