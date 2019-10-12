import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>Login page</p>
        <Link to='/'>To Home</Link>
      </div>
    );
  }
}

export default Login;