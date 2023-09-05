import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Homepage from '../pages/home/Homepage'
import Dashboard from '../pages/dashboard/Dashboard';

// Components
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

const Setup = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default Setup