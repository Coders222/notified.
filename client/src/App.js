import './App.css';
import img from './images/logo.png';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components'; 
import LandingPage from './LandingPage';
import Nav from './Nav';
import Menu from './Menu';
import About from './About';
import Upload from './Upload';
import Documents from './Documents';
import AdminLock from './AdminLock';
import Admin from './Admin';


function App() {

  return (
    <Router>
        <div className='App'>
            <Routes>
                 <Route exact path='/' element={<LandingPage/>}></Route>
                 <Route exact path='/menu' element={<Menu/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 <Route exact path='/upload' element={<Upload/>}></Route>
                 <Route exact path='/about' element={<About/>}></Route>
                 <Route exact path='/admin' element={<Admin/>}></Route>
                 <Route exact path='/documents/:subject' element={<Documents/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;