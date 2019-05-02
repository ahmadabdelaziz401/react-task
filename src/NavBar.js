import React from 'react';
import'./NavBar.css';
import { Router, Route, Link } from 'react-router-dom';

 class NavBar extends React.Component {
  render() {
    return (
    <div className = "Nav" >
      <nav>
        <Link to="/Home" activeClassName="active">Home</Link> 
        <Link to="/Library" activeClassName="active">Library</Link>
        <Link to="/CurrentRetrains" activeClassName="active">CurrentRetrains</Link> 
      </nav>
    </div>
    );
  }
}
export default NavBar;