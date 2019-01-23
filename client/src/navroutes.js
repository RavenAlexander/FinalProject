import { Route, Router } from 'react-router-dom';
import React from 'react';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Inventory from './pages/Inventory/Inventory';
import Scan from './pages/Scan/Scan';


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/inventory" render={(props) => <Inventory auth={auth} {...props} />} />;
          
          <Route path="/scan" render={(props) => <Scan auth={auth} {...props} />} />;
          
      
        </div>
      </Router>
  );
}
