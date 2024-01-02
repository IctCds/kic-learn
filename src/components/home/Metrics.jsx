import React from 'react'
import {ReactComponent as Icon1 } from '../../svg/icon1.svg';
import {ReactComponent as Icon2 } from '../../svg/icon2.svg';
import {ReactComponent as Icon3 } from '../../svg/icon3.svg';
import {ReactComponent as Icon4 } from '../../svg/icon4.svg';
import {ReactComponent as Icon5 } from '../../svg/icon5.svg';
import {ReactComponent as Icon6 } from '../../svg/icon6.svg';
import {ReactComponent as Icon7 } from '../../svg/icon7.svg';
import {ReactComponent as Icon8 } from '../../svg/icon8.svg';
import {ReactComponent as Icon9 } from '../../svg/icon9.svg';


const Metrics = () => {
  return (
    <section className='max-w-[1100px] mx-auto py-4 grid lg:grid-cols-3'>
      <div className='bg-[#EFFEE6] py-4 h-[120px] w-[300px] mx-auto mb-4 rounded-md text-center px-4'>
        <h3 className='mb-2 text-[#87E54C] font-bold text-2xl'>1,000,000+</h3>
        <p className='text-sm text-[#2B5511]'>Past Questions and Solution for JAMB, Junior and Senior Waec.</p>
        <div className='flex justify-between'>
          <span>
            <Icon2/>
          </span>
          <span className='flex flex-row'>
            <Icon3/>
            <span className='mt-[-15px]'><Icon1/></span>
          </span>
        </div>
      </div>
      <div className='bg-[#E6F6FE] py-4 h-[120px] w-[300px] mx-auto mb-4 rounded-md text-center px-4'>
        <h3 className='mb-2 text-[#4CB2E5] font-bold text-2xl'>1000+</h3>
        <p className='text-sm text-[#113E55]'>Enjoyable recorded videos on various topics for all classes.</p>
        <div className='flex justify-between'>
          <span>
            <Icon5/>
          </span>
          <span className='flex flex-row'>
            <Icon6/>
            <span className='mt-[-15px]'><Icon4/></span>
          </span>
        </div>
      </div>
      <div className='bg-[#F5E6FE] py-4 h-[120px] w-[300px] mx-auto mb-4 rounded-md text-center px-4'>
        <h3 className='mb-2 text-[#AB4CE5] font-bold text-2xl'>100%</h3>
        <p className='text-sm text-[#3B1155]'>Guided feedback to help you improve and get excellence results.</p>
        <div className='flex justify-between'>
          <span>
            <Icon8/>
          </span>
          <span className='flex flex-row'>
            <Icon9/>
            <span className='mt-[-15px]'><Icon7/></span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Metrics