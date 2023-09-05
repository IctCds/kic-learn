import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Homepage from '../pages/home/Homepage'
import Dashboard from '../pages/dashboard/Dashboard';
import Quiz from '../pages/dashboard/Quiz';
import Library from '../pages/dashboard/Library';
import Exams from '../pages/dashboard/Exams';
import Profile from '../pages/dashboard/Profile';
import Report from '../pages/dashboard/Report';

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
          <Route path='dashboard/quiz' element={<Quiz/>}/>
          <Route path='dashboard/library' element={<Library/>}/>
          <Route path='dashboard/exams' element={<Exams/>}/>
          <Route path='dashboard/profile' element={<Profile/>}/>
          <Route path='dashboard/report' element={<Report/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default Setup