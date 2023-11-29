import React, {useEffect, useState} from 'react';
import { useAuthContext } from '../../context/auth/AuthContext';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BiLock} from 'react-icons/bi';
import {FiEye, FiEyeOff} from 'react-icons/fi';

const Login = () => {
  let {setSignUpOpen, setLoginOpen, login, loading, getUsers} = useAuthContext();
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  useEffect(()=>{
    getUsers();
  }, [])

  return (
    <div className='h-[310px] w-[300px] bg-white rounded-md px-4 py-2'>
      <form className='w-full mt-2 py-4' onSubmit={login}>
      <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='text-xs font-semibold text-[#817A86] mb-2'>Email</label>
          <div className='relative flex items-center'>
            <span className='absolute text-gray-300 pl-3 pointer-events-none'><MdOutlineAlternateEmail/></span>
            <input type='email' name='email' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
              placeholder='ciromachukwu@gmail.com'/>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Password</label>
          <div className='relative flex items-center'>
            <span className='w-full absolute text-gray-300 px-3 flex justify-between pointer-events-none'>
              <span><BiLock/></span>
              <span onClick={()=> setChangePassword(changeIcon)}>{changeIcon ? <FiEye/> : <FiEyeOff/>}</span>
            </span>
            <input type={changePassword ? 'password' : 'text'} name='password' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
              placeholder='**********'/>
          </div>
        </div>
        <div>
          <input type='submit' value={loading? 'Logging in ...':'Login'} className='w-full h-12 rounded-md bg-[#942BD4] text-[#FAF9FB] text-sm cursor-pointer'/>
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