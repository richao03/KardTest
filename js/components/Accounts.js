import React, {Component} from 'react';


import UserStore from '../stores/UserStore';
import Navbar from './Navbar';
import makeCall from '../makeCall';

export default class Accounts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}

		this.receiveData = this.receiveData.bind(this);
	}


	componentDidMount() {
		let dataToSend = {
			client_id: 'test_id',
			secret: 'test_secret',
			username: 'plaid_test',
			password: 'plaid_good',
			type: 'wells'
		}
		makeCall.getData(dataToSend);
		UserStore.on("receiveData", this.receiveData);
	}

	receiveData() {
		this.setState({data: UserStore.receiveData()});
	}

	componentWillUnmount() {
		UserStore.removeListener("receiveData", this.receiveData)
	}

	render() {
		return (
			<If condition={this.state.data}>
				<Navbar accounts={this.state.data.accounts}/>

			</If>


		)
	}
}
