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
import Auth from '../components/auth/Auth';

// Context
import { AuthProvider } from '../context/auth/AuthContext';
import { AppProvider } from '../context/app/AppContext';

const Setup = () => {
  return (
    <Router>
      <AuthProvider>
      <AppProvider>
        <Navbar/>
        <Auth/>
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>

            {/* Dashboard Routes */}
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/quiz/:id/:exam' element={<Quiz/>}/>
            <Route path='/dashboard/library/:id' element={<Library/>}/>
            <Route path='/dashboard/exams/:id/:exam' element={<Exams/>}/>
            <Route path='/dashboard/profile/:id' element={<Profile/>}/>
            <Route path='/dashboard/report/:id' element={<Report/>}/>
            {/* Dashboard Routes */}

          </Routes>
        <Footer/>
        </AppProvider>
      </AuthProvider>
    </Router>
  )
}

export default Setup