import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Pricing from "./Pricing";
import Contact from "./Contact";
import './index.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
    } 
    else {
      linksEl.style.display = 'block';
    }
  }
  render() {
    return (
      <Router>
       <div className="app">
        <header className="clone">
          <div className="container">
              <div id="logo">
                  <div className="inner container">
                    <Link to="/">
                      <span className="blue brand-text">ReactApp</span>
                    </Link>
                  </div>
              </div>
              <nav className="container">
                <ul className="header wideDiv" id="mainmenu">
                  <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                  <li><NavLink to="/about" activeClassName="selected">About Us</NavLink></li>
                  <li><NavLink to="/pricing" activeClassName="selected">Pricing</NavLink></li>
                  <li><NavLink to="/services" activeClassName="selected">Services</NavLink></li>
                  <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
                </ul>
                <div className="navNarrow">
                  <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                  <div className="narrowLinks">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/about">About Us </NavLink>
                   <NavLink to="/pricing">Pricing</NavLink>
                   <NavLink to="/services">Services</NavLink>
                   <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </nav>
          </div>
        </header>
        <div className="container-fluid">
               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/pricing" component={Pricing}/>
               <Route path="/services" component={Service}/>
               <Route path="/contact" component={Contact}/>
        </div>
       </div>
      </Router>
    );
  }
}
 
export default Main;
