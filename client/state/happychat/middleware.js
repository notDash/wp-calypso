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

export default ( store ) => ( next ) => ( action ) => {
	if ( action.type === ROUTE_SET ) {
		const state = store.getState();
		if ( isHappychatClientConnected( state ) &&
			isHappychatAcceptingChats( state ) &&
			isHappychatChatAssigned( state ) ) {
			store.dispatch( sendEventMessage( 'Looking at ' + action.path ) );
		}
	}
	return next( action );
};
