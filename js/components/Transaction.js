import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import UserStore from '../stores/UserStore';
import TableData from './TableData';

export default class Transaction extends Component {
	constructor(props) {
		super(props);
		const transactions = UserStore.receiveTransactions(this.props.params.accountId);
		this.state = {}
	}

	componentDidMount() {
		this.setState({
			transactions: UserStore.receiveTransactions(this.props.params.accountId),
			account: UserStore.receiveAccount(this.props.params.accountId)
		})
	}



	render() {
		const {params} = this.props;
		return (
			<div className="transContainer " style={styles.container}>

				<button
					className="backButton"
					onClick={() => {browserHistory.push('/accounts')}}
					style={styles.backButton}>
					<h5>Back to Accounts</h5>
				</button>

			

			<If condition={this.state.transactions}>
				<TableData transactions={this.state.transactions} account={this.state.account[0]}/>
			</If>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: 20
	},
	backButton: {
		borderWidth: 2,
	}
}
