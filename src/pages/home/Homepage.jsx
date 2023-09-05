import React from 'react'
import Hero from '../../components/home/Hero';
import Metrics from '../../components/home/Metrics';
import Benefits from '../../components/home/Benefits';
import Exams from '../../components/home/Exams';
// import Reviews from '../../components/home/Reviews';
import Button from '../../components/home/Button';

const Homepage = () => {
  return (
    <main className='max-w-[1280px] mx-auto pt-8'>
      <Hero/>
      <Button/>
      <Metrics/>
      <Button/>
      <Benefits/>
      <Button/>
      <Exams/>
      <Button/>
    </main>
  )
}

export default Homepage