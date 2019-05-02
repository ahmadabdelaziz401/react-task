import React from 'react';
import  LibTable  from './LibTable.js';


class Library extends React.Component{
	render(){
		return(
			<div>
			<br/>
			
			<h1 style={{ color: 'dodgerblue', marginLeft: 200 }}> Library</h1>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<LibTable/>
			</div>
			);
	}
}

export default Library;