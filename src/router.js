import React from 'react';
import { Router, Redirect, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
import BasicLayout from './Layout/BasicLayout';
import Login from './routes/Login';
import courseware from './routes/courseware'
// import RegistrationForm from './routes/Add';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" component={Login} />
        {/* <Route path="/" exact component={IndexPage} /> */}
        {/* <Route path="/products" component={Products} /> */}
        <Route path="/Layout" component={BasicLayout} />
        
        <Redirect from="*" to="/Layout" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
