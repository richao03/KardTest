import Dispatcher from  "../Dispatcher";
import {ActionTypes} from "../Constants";

let UserActions = {
	dataReceived(data) {
		Dispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_DATA,
			data
		})
	}
}

export default UserActions;
