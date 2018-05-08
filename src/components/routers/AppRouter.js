// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { HomePage } from '../pages/HomePage';
import { PoolPage } from '../pages/PoolPage';
import { SinglePool } from '../SinglePool/SinglePool';
import { MyPools } from '../pages/MyPools';
import { CreatePoolPage } from '../pages/CreatePoolPage';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/pools' component={PoolPage} />
        <Route path='/mypools' component={MyPools} />
        <Route path='/pool/:id' component={SinglePool} />
        <Route path='/create' component={CreatePoolPage} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  </BrowserRouter>
);