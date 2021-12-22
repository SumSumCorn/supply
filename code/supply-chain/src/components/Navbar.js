import React, { Component } from "react";
import Identicon from "identicon.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow bg-dark">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.hongik.ac.kr/index.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          BNPL supply chain
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item d-none d-sm-none d-sm-block text-nowrap">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
