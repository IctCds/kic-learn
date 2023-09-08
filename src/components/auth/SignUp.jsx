import React, {useState} from 'react';
import { useAuthContext } from '../../context/auth/AuthContext';
import {BsEmojiSunglasses} from 'react-icons/bs';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BiLock} from 'react-icons/bi';
import {FiEye} from 'react-icons/fi';

const exams = ['JSSCE', 'SSSCE', 'JAMB'];

const SignUp = () => {
  let {setSignUpOpen, setLoginOpen} = useAuthContext();
  const [active, setActive] = useState(0);

  const handleClick = (index) =>{
    setActive(index);
  }

  return (
    <div className='h-[480px] w-[300px] bg-white rounded-md px-4 py-6'>
      <h3 className='text-sm font-semibold mb-2'>What examination would you like to prepare for?</h3>
      <div className='w-full h-8 border border-[#F3F0F4] rounded-md flex justify-between text-sm text-center'>
        {exams.map((exam, index)=>{
          return(
            <span 
            key={index}
            className={active === index ? 'w-1/3 py-1 bg-[#F5E6FE] text-[#942BD4] border-b-2 border-[#942BD4] font-semibold cursor-pointer': 'w-1/3 py-1 text-[#CDC7D1] font-semibold cursor-pointer'}
            onClick={()=> {handleClick(index)}}
            >
            {exam}
            </span>
          )
        })}
      </div>
      <form className='w-full mt-2 py-4'>
        <div className='flex flex-col mb-2'>
          <label htmlFor='name' className='text-xs font-semibold text-[#817A86] mb-2'>Name</label>
          <div className='relative flex items-center'>
            <span className='absolute text-gray-300 pl-3 pointer-events-none'><BsEmojiSunglasses/></span>
            <input type='text' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs focus:outline-[#942BD4]' 
              placeholder='Ciroma Chukwu'/>
          </div>
        </div>
        <div className='flex flex-col mb-2'>
          <label htmlFor='email' className='text-xs font-semibold text-[#817A86] mb-2'>Email</label>
          <div className='relative flex items-center'>
            <span className='absolute text-gray-300 pl-3 pointer-events-none'><MdOutlineAlternateEmail/></span>
            <input type='email' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs focus:outline-[#942BD4]' 
              placeholder='ciromachukwu@gmail.com'/>
          </div>
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Password</label>
          <div className='relative flex items-center'>
            <span className='w-full absolute text-gray-300 px-3 flex justify-between pointer-events-none'>
              <BiLock/>
              <FiEye/>
            </span>
            <input type='password' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs focus:outline-[#942BD4]' 
              placeholder='**********'/>
          </div>
        </div>
        <div>
          <input type='submit' value='Sign up' className='w-full h-12 rounded-md bg-[#942BD4] text-[#FAF9FB] text-sm cursor-pointer'/>
        </div>
      </form>
      <div className='text-center text-sm'>
        <p>Already have an account? <span className='text-[#942bd4] underline cursor-pointer'
        onClick={()=> {setSignUpOpen(false); setLoginOpen(true)}}
        >Login</span></p>
      </div>
    </div>
  )
}

export default SignUp