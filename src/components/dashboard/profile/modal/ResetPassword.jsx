import React from 'react'
import {BiLock} from 'react-icons/bi';
import {FiEye} from 'react-icons/fi';

const ResetPassword = () => {
  return (
    <div className='h-[310px] w-[300px] bg-white rounded-md px-4 py-2'>
      <form className='w-full mt-2 py-4'>
        <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Enter New Password</label>
            <div className='relative flex items-center'>
              <span className='w-full absolute text-gray-300 px-3 flex justify-between pointer-events-none'>
                <BiLock/>
                <FiEye/>
              </span>
              <input type='password' name='password' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
                placeholder='**********'/>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Confirm Password</label>
          <div className='relative flex items-center'>
            <span className='w-full absolute text-gray-300 px-3 flex justify-between pointer-events-none'>
              <BiLock/>
              <FiEye/>
            </span>
            <input type='password' name='password2' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
              placeholder='**********'/>
          </div>
        </div>
        <div>
          <input type='submit' value="Reset Password" className='w-full h-12 rounded-md bg-[#942BD4] text-[#FAF9FB] text-sm cursor-pointer'/>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword;