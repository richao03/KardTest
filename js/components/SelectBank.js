import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import makeCall from '../makeCall';
import UserStore from '../stores/UserStore';

export default class SelectBank extends Component {
    constructor(props) {
        super(props);

        this.openSandbox = this.openSandbox.bind(this);
        this.getData = this.getData.bind(this);
        this.navigateToAccounts = this.navigateToAccounts.bind(this);
    }

    componentDidMount() {
        UserStore.on("receiveData", this.navigateToAccounts);
    }

    componentWillUnmount() {
        UserStore.removeListener("receiveData", this.navigateToAccounts)
    }

    navigateToAccounts() {
        browserHistory.push('/accounts');
    }

    openSandbox() {
        const sandboxHandler = Plaid.create({
            env: 'tartan',
            clientName: 'Client Name',
            key: 'test_key',
            product: 'connect',
            onSuccess: (public_token, metadata) => {
                // this.getData(metadata.institution.type)
                browserHistory.push('/accounts');
            }
        });
        sandboxHandler.open();
    }

    getData(data) {
        let dataToSend = {
            client_id: 'test_id',
            secret: 'test_secret',
            username: 'plaid_test',
            password: 'plaid_good',
            type: data
        }

        makeCall.getData(dataToSend);
    }

    render() {
        return (
            <div className="wrapper">
				<div className="topLogin text-md-center">
				<img className="kardLogo" src="/kard-beta-logo-green.png"/>
					
						<button className="firstButton"
						onClick={this.openSandbox}
						style={styles.button}>
						
								Access Your Bank Account
			
						</button>
					</div>
			</div>
        )
    }
}

const styles = {
    container: {
        paddingTop: 300,
    },
    button: {
    	marginTop:10,
        width: 300,
        height: 70
    },
    instructions: {
        color: '#696969',
        marginTop: 20
    }
}
