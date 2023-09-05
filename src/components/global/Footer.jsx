import React from 'react'
import logo from '../../img/global/logo3.png'

const Footer = () => {
  return (
    <section className='max-w-[1280px] mx-auto bg-[#343036] pt-4'>
      <div className='max-w-[390px] mx-auto text-[#817A86] text-sm p-4'>
        <img className='h-[25px]' src={logo} alt='logo'/>
        <h3 className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        <div className='max-w-[390px] mx-auto mt-4 flex justify-between font-semibold underline'>
          <span>Home</span>
          <span>About</span>
          <span>Support</span>
          <span>Contact</span>
        </div>
      </div>
      <div className='bg-[#1A181B] py-4'>
        <div className='max-w-[390px] px-4 mx-auto text-sm text-[rgb(103,97,107)]'>
          <h3>Created by NYSC ICT CDS 2023, Kosofe LGA, Lagos State | Copyright ©2023</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer