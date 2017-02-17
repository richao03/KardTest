import {post} from 'jquery';
import UserActions from './actions/UserActions';


let makeCall = {
	getData(bankData) {
		post('/users', bankData)
			.then(res => {
				UserActions.dataReceived(res);
			})
			.catch(err => {
				console.log('err', err);
			})


	},




}

export default makeCall;
