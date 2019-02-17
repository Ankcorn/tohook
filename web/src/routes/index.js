import React from 'react';
import { Router } from '@reach/router'
import Login from '../login';
import Auth from './auth';
import App from '../app';

function Routes() {
  return (
    <Router>
      <Auth default>
        <App path="/" />
      </Auth>
      <Login path="/login" />
    </Router>
  )
}

export default Routes;