import React from 'react';
import { GlobalProvider } from "../context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from '../components/sidebar/Sidebar';
import Search from '../components/search/Search';
import TaskForm from '../components/taskForm/TaskForm';
import Dashboard from '../components/dashboard/Dashboard';
import TaskList from '../components/taskList/TaskList';


const App = () => (
  <GlobalProvider>
    <Router>
      <Sidebar />
      <Search />
      <Routes>
        <Route exact path="/"element={<Dashboard />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  </GlobalProvider>
);

export default App;