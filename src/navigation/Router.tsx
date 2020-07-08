import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../screens/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/home']} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
