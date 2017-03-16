import React, {Component} from 'react';
var path = require('../public/image/logo.png');
import {Link} from 'react-router';
import NavLink from './nav_link';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav">
            <ul>
              <li>
                <Link to="/welcome">
                  <img className="logo-img" src={path} alt="logo" />
                </Link>
              </li>
            </ul>
            <ul>
              <li><NavLink to="/welcome">Home</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
            <div className="clear"></div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
