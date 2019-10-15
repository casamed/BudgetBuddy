import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="fullScreen landingBack">
      <NavBar/>
      <div className="Iron-Grid ">
            <div className="col welcome-sign">
                <h1 className="cover-heading">Welcome</h1>
                <p className="lead">Budget Buddy is a Web App that allows you to create and track your expenses!</p>
                <p className="lead">
                    <Link to='/Login' className="btn btn-lg btn-secondary">Login</Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Landing;
