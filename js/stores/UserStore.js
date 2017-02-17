import Dispatcher from '../Dispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let mainData, dataFromAction;
let tempData;

class UserStore extends EventEmitter {
	constructor(props) {
		super(props);

		Dispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.RECEIVE_DATA:
					dataFromAction = action.data;
					this.emit('receiveData');

				default:
			}

		})

	}

	receiveAccount(accountId) {
		return mainData.accounts.filter(account => {
			return (account._id === accountId);
		})
		// return tempData.accounts.filter(account => {
		// 	return (account._id === accountId);
		// })
	}

	receiveTransactions(accountId) {
		// return tempData.transactions.filter(transaction => {
		// 	return (transaction._account === accountId);
		// })

		return mainData.transactions.filter(transaction => {
			return (transaction._account === accountId);
		})
	}

	receiveData() {
		dataFromAction = JSON.parse(dataFromAction);
		mainData = dataFromAction;
		return mainData;
		// console.log('mainData', mainData);
		tempData = {
  "thereIsNo":"data"
}




return _data;
	}

}

export default new UserStore();
