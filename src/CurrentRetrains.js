import React from 'react';
import  MyTable  from './MyTable.js';

class CurrentRetrains extends React.Component{
	render(){
		return(
			<div>
			<br/>
			<h1 style={{ color: 'dodgerblue', marginLeft: 200 }}> Current Retrains</h1>
			<br/>
			<br/>
			<br/>
			<button> Add Retrain</button>
			<br/>
			<br/>
			<MyTable />
			</div>
			);
	}
}

export default CurrentRetrains;