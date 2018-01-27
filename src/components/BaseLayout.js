import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {
  render() {
    return(
      <div>
        <NavBar/>
          {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <h1>NavBar</h1>
        <div>
          <li><Link to="/home-page">Home</Link></li>
          <li><Link to="/flowers-form">Flowers Form</Link></li>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <h1>Footer</h1>
      </div>
    )
  }
}
