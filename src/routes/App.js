import React from 'react';
import { BrowserRouter as Router, Switch as Switch, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Home from '../containers/Home';
import Task from '../containers/Task';
import TaskList from '../containers/TaskList';



const App = () => (
  <Router>
    <Sidebar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Task} />
        <Route path="/tasks" component={TaskList} />
        
      </Switch>
    
  </Router>
);

export default App;