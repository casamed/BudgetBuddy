import React from 'react';
import { Link } from 'react-router-dom';

const MainLanding = () => {
    return (
        <div className="container">
            <h1 className="cover-heading">Welcome</h1>
            <p className="lead">Budget Buddy is a Web App that allows you to create and track your expenses!</p>
            <p className="lead">
                <Link to='/Login' className="btn btn-lg btn-secondary">Login</Link>
            </p>
        </div>
    );
  };

  export default MainLanding;