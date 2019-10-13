import React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Login from '../Containers/login';
import NotFound from '../Components/Errors/NotFound';

const Test = () => {
  return (
    <div>
      <p>test component</p>
      <Link to='/login'>Login</Link>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;