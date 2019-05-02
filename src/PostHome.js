import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import MyTable from './MyTable';
import './NavBar.css';
import './Style.css';
import './App.css';
import { Progress } from 'antd';


class PostHome extends React.Component {
   
  render() {
    return (
      <div>

     <br/>
     
     <button>Hello</button> 
     <br/>
        <h1 style={{ color: 'navy', marginLeft: 550 }}> App Name</h1>
     <br/>
      <div>
    <Progress percent={50} status="active" />
  </div>
     <br/>
     <div align="center" >
        <MyTable/>
        </div>
    </div>
    );
  }
}

export default PostHome;