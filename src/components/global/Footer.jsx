import React from 'react'
import logo from '../../img/global/logo3.png'

const Footer = () => {
  return (
    <section className='bg-[#343036] pt-4'>
      <div className='max-w-[1280px] mx-auto text-[#817A86] text-sm p-4 md:flex md:justify-between md:py-8'>
        <div>
          <img className='h-[25px]' src={logo} alt='logo'/>
          <h3 className='mt-2 md:w-[300px] lg:w-[550px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>
        <div className='w-[300px] mt-4 md:mt-6 lg:mt-4 flex justify-between font-semibold underline'>
          <span>Home</span>
          <span>About</span>
          <span>Support</span>
          <span>Contact</span>
        </div>
      </div>
      <div className='bg-[#1A181B] py-4'>
        <div className='text-sm text-center text-[rgb(103,97,107)]'>
          <h3>Copyright ©2023 KIC. All Rights Reserved</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer