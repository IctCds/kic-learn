import React from 'react';
import Intro from '../../components/dashboard/Intro';
import Features from '../../components/dashboard/Features';

const Dashboard = () => {
  return (
    <main className="max-w-[1280px] mx-auto pt-8">
      <Intro/>
      <Features/>
    </main>
  )
}

export default Dashboard;