import React from 'react'
import {ReactComponent as Ellipse1} from '../../svg/ellipse1.svg';
import {ReactComponent as Ellipse2} from '../../svg/ellipse2.svg';
import {ReactComponent as Polygon1} from '../../svg/polygon1.svg';
import {ReactComponent as Polygon2} from '../../svg/polygon2.svg';
import Waec from '../../img/home/waec.png';
import Jamb from '../../img/home/jamb.png';


const Hero = () => {
  return (
    <section className='bg-[#F5E6FE] h-[350px] w-[300px] mx-auto p-4 rounded-md text-center '>
      <div className='flex justify-between'>
        <span className='ml-10 mt-[-30px]'>
          <Ellipse1/>
        </span>
        <span>
          <Polygon2/>
        </span>
      </div>
      <h3 className='text-3xl font-extrabold text-[#942BD4]'>#1 collection of</h3>
      <h3 className='text-3xl font-extrabold text-[#3B1155]'>past question & answers</h3>
      <div className='w-[200px] mx-auto flex justify-between mt-6'>
        <span className='mt-[-15px]'><Polygon1/></span>
        <span><img className='h-[35px]' src={Waec} alt='waec'/></span>
        <span><img className='h-[35px]' src={Jamb} alt='jamb'/></span>
        <span className='mt-[15px]'><Ellipse2/></span>
      </div>
      <p className='text-sm mt-6 text-[#3B1155]'>
        Take past questions on any terminal exam and get guided feedback to help you prepare.
      </p>
      <div className='flex justify-between mt-4'>
        <span><Ellipse2/></span>
        <span className='mt-[35px]'><Ellipse1/></span>
      </div>
    </section>
  )
}

export default Hero