import React from 'react';
import { useAuthContext } from '../../context/auth/AuthContext';

const Login = () => {
  let {setSignUpOpen, setLoginOpen} = useAuthContext();

  return (
    <div className='h-[310px] w-[300px] bg-white rounded-md px-4 py-2'>
      <form className='w-full mt-2 py-4'>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='text-xs font-semibold text-[#817A86] mb-2'>Email</label>
          <input type='email' className='border-none px-2 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs' 
            placeholder='ciromachukwu@gmail.com'/>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Password</label>
          <input type='password' className='border-none px-2 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs' 
            placeholder='**********'/>
        </div>
        <div>
          <input type='submit' value='Login' className='w-full h-12 rounded-md bg-[#942BD4] text-[#FAF9FB] text-sm cursor-pointer'/>
        </div>
      </form>
      <div className='text-center text-sm'>
        <p>Don't have an account? <span className='text-[#942bd4] underline cursor-pointer'
        onClick={()=> {setLoginOpen(false); setSignUpOpen(true)}}
        >Sign up</span></p>
      </div>
    </div>
  )
}

export default Login;