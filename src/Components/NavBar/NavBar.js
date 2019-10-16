import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light navBack ">
            <h2 className="nav-item">Budget Buddy</h2>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
};

export default NavBar;