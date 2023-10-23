import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/header';

const App = () => {
  return (
    <div className='h-100 main-container'>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;
