import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-5ud42qb68mwie6dn.us.auth0.com"
    clientId="yU2vY798NyVOUqe46X16qQO0qXjzIzBb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
   
  >

    <App />

  </Auth0Provider>
  </React.StrictMode>
);


