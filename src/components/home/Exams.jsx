import React from 'react'
import Waec from '../../img/home/waec.png';
import Jamb from '../../img/home/jamb.png';

const Exams = () => {
  return (
    <section className="bg-[#FAF9FB] py-8 md:py-20 flex justify-center flex-col">
      <div className='w-[100px] mx-auto flex justify-between'>
        <span>
          <img className='h-[40px]' src={Waec} alt='waec'/>
        </span>
        <span>
          <img className='h-[40px]' src={Jamb} alt='jamb'/>
        </span>
      </div>
      <div className='px-8 mt-6 text-center'>
        <p>We help students prepare for all terminal exams in JSS3 and SS3.</p>
      </div>
    </section>
  )
}

export default Exams