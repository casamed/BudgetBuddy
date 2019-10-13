import React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Login from '../Containers/login';
import Landing from '../Components/Landing/Landing';
import NotFound from '../Components/Errors/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;