import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Budget Buddy</a>
        

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                    <Link to='/Login' className="nav-link">Login</Link>
                    </li>

                </ul>

            </div>
        </nav>
  );
};

export default NavBar;