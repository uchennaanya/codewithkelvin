import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>CodesByKelvin</h2>
      <nav className="navigation-menu">
        <ul >
          <li>
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>

          {/* <li>
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
