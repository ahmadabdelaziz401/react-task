import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import WrappedDemo from "./Demo";
import MyTable from './MyTable';
import './NavBar.css';
import './Style.css';


class Home extends React.Component {

  render() {
    return (
      <div>
        <br/>
          <div>
            <WrappedDemo />
          </div>
        <br/>
          <div align="center" >
          </div>
      </div>
    );
  }
}



export default Home;
