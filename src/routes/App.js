import React from 'react';
import { BrowserRouter as Router, Switch as Switch, Route } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Home from '../containers/Home';
// import Player from '../containers/Player';
// import Login from '../containers/Login';
// import Register from '../containers/Register';
// import NotFount from '../containers/NotFount';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default App;