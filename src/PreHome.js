import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar';
import WrappedDemo from "./Demo";
import MyTable from './MyTable';
import './NavBar.css';
import './Style.css';

class PreHome extends React.Component {
  render() {
    return (
      <div>
           <br/>
     
     <button>Hello</button> 
     <br/>
        <h1 style={{ color: 'navy', marginLeft: 550 }}> App Name</h1>
     <br/>
     <div>
     <WrappedDemo />
     </div>
     <br/>
     <div align="center" >
        <MyTable/>
        </div>
    </div>
    );
  }
}



export default PreHome;