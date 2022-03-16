import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import '../assets/styles/Home.scss';

const Home = () => (
    <>
          <Sidebar />
       <Search />
      
        
        <Dashboard />
    </>
);

export default Home;