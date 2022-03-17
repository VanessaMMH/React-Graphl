import React from 'react';
import { GlobalProvider } from "../context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Home from '../containers/Home.jsx';
import Task from '../containers/Task';
import TaskList from '../containers/TaskList';


const App = () => (
  <GlobalProvider>
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/"element={<Home />} />
        <Route path="/add" element={<Task />} />
        <Route path="/edit/:id" element={<Task />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>

    </Router>
  </GlobalProvider>
);

export default App;