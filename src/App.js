import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import WrappedDemo from "./Demo";
import MyTable from './MyTable';
import './NavBar.css';
import './Style.css';
import CurrentRetrains from './CurrentRetrains';
import Library from './Library';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';




class App extends Component {
  
  render() {
    return (
     <div>
        <NavBar />
     <br/>
     <br/>
     <br/>
        <h1 style={{ color: 'navy', marginLeft: 550 }}> App Name</h1>
     <br/>
     <div align="center" >
        <Route path="/Home" component={Home}/>
        <Route path="/Library" component={Library}/>
        <Route path="/CurrentRetrains" component={CurrentRetrains}/>
    </div>
    </div>
    );
  }
}



export default App;
