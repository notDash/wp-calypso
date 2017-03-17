/**
 * Internal dependencies
 */
import { ROUTE_SET } from 'state/action-types';
import { sendEventMessage } from 'state/happychat/actions';
import {
	isHappychatClientConnected,
	isHappychatAcceptingChats,
	isHappychatChatAssigned
 } from 'state/happychat/selectors';
import { getCurrentUser } from 'state/current-user/selectors';

export default ( store ) => ( next ) => ( action ) => {
	if ( action.type === ROUTE_SET ) {
		const state = store.getState();
		const currentUser = getCurrentUser( store.getState() );
		if ( isHappychatClientConnected( state ) &&
			isHappychatAcceptingChats( state ) &&
			isHappychatChatAssigned( state ) ) {
			store.dispatch( sendEventMessage( `Looking at https://wordpress.com${ action.path }?support_user=${ currentUser.username } ` ) );
		}
	}
	return next( action );
};
