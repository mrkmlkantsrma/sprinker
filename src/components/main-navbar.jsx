import { useState, useEffect, Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function MainNavBar(props) {

  return (
    <nav
      className={`navbar  navbar-expand-lg navbar-dark bg-light-custom fixed-top  `}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          KamalKant 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold"
                }}
                to="/courses"
                className="nav-link"
              >
                 Fist Link
              </NavLink>
            </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                     Second Link
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Third link
                  </Link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
