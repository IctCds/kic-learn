import React from 'react'
import {ReactComponent as Ellipse1} from '../../svg/ellipse1.svg';
import {ReactComponent as Polygon2} from '../../svg/polygon2.svg';
import {ReactComponent as Polygon1} from '../../svg/polygon1.svg';
import { useAuthContext } from '../../context/auth/AuthContext';

const Intro = () => {
  const {user} = useAuthContext()
  const firstname = user ? user.username.split(" ")[0] : "firstname";

  return (
    <section className='bg-[#F5E6FE] h-[200px] w-[300px] md:w-[600px] lg:w-[900px] mx-auto p-4 rounded-md text-center mt-8 md:my-16'>
      <div className='flex justify-between'>
        <span className='ml-10 mt-[-30px]'>
          <Ellipse1/>
        </span>
        <span>
          <Polygon2/>
        </span>
      </div>
      <h3 className='text-3xl md:text-4xl font-extrabold text-[#942BD4]'>Hi {firstname},</h3>
      <h3 className='text-3xl md:text-4xl font-extrabold text-[#3B1155]'>what are you studying today?</h3>
      <div className='ml-8 mt-2'>
        <Polygon1/>
      </div>
    </section>
  )
}

export default Intro