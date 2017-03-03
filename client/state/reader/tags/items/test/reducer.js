/**
 * External dependencies
 */
import { expect } from 'chai';
import { keyBy } from 'lodash';

/**
 * Internal dependencies
 */
import { items } from '../reducer';
import { receiveUnfollowTag, receiveTags } from '../actions';

const keyById = tags => keyBy( tags, 'id' );

const TAG1 = {
	id: '307',
	slug: 'chickens',
	title: 'Chickens',
	displayName: 'chickens',
	url: 'https://public-api.wordpress.com/rest/v1.2/read/tags/chickens/posts',
};

const TAG2 = {
	id: '148',
	slug: 'design',
	title: 'Design',
	displayName: 'design',
	url: 'https://public-api.wordpress.com/rest/v1.2/read/tags/design/posts',
};

describe( 'reducer', () => {
	describe( '#items()', () => {
		it( 'should default to an empty object', () => {
			const state = items( undefined, {} );
			expect( state ).to.eql( {} );
		} );

		it( 'should add single tag in the payload to state', () => {
			const prevState = {};
			const action = receiveTags( { payload: [ TAG1 ] } );

			const state = items( prevState, action );
			expect( state ).to.eql( { [ TAG1.id ]: TAG1 } );
		} );

		it( 'should add multiple tags in the payload to state', () => {
			const prevState = {};
			const action = receiveTags( { payload: [ TAG1, TAG2 ] } );

			const state = items( prevState, action );
			expect( state ).to.eql( keyById( [ TAG1, TAG2 ] ) );
		} );

		it( 'should update tags that have changed', () => {
			const prevState = { [ TAG1.id ]: TAG1, [ TAG2.id ]: TAG2 };
			const action = receiveTags( {
				payload: [ { ...TAG1, title: 'NotChickens' }, TAG2 ],
			} );

			const state = items( prevState, action );
			expect( state ).to.eql( keyById( [ { ...TAG1, title: 'NotChickens' }, TAG2 ] ) );
		} );

		it( 'should unfollow a tag if requested to do so', () => {
			const prevState = { [ TAG1.id ]: TAG1, [ TAG2.id ]: TAG2 };
			const action = receiveUnfollowTag( { payload: TAG1.id } );
			const state = items( prevState, action );

			expect( state ).to.eql( keyById( [
				{ ...TAG1, isFollowing: false },
				TAG2
			] ) );
		} );
	} );
} );
