import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class TableData extends Component {
	constructor(props) {
		super(props);
		    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
	}

	render() {

		const {transactions, account} = this.props;
		let dataForTable = this.props.transactions
		console.log(dataForTable)
		let tableData = transactions.map((transaction, index) => {
	
			if(transaction.amount <0){
				transaction.amount = "-$"+Math.abs(transaction.amount).toFixed(2)
			} else {
				transaction.amount = "$"+Math.abs(transaction.amount).toFixed(2)
			}
			console.log(tableData)
		})
		

return(
		  <BootstrapTable className="bsTable" data={dataForTable} options={ this.options } search={ true } searchPlaceholder='search current account...'>
      <TableHeaderColumn isKey dataField='name' dataSort dataAlign='left'>Name <img className="sorticon" src="/sort.png"/></TableHeaderColumn>
      <TableHeaderColumn dataField='date' dataSort dataAlign='center' width="250px"> Date<img className="sorticon" src="/sort.png"/></TableHeaderColumn>
        <TableHeaderColumn dataField='amount' dataSort dataAlign='right' width="150px">Amount<img className="sorticon" src="/sort.png"/></TableHeaderColumn>
                <TableHeaderColumn dataField='pending' dataSort dataAlign='center' width="150px">Pending?<img className="sorticon" src="/sort.png"/></TableHeaderColumn>
  </BootstrapTable>
  )
	}
}

const styles = {
	container: {
		color: '#696969'
	}
}
