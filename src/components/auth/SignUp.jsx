import React, {useState} from 'react';
import { useAuthContext } from '../../context/auth/AuthContext';

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
          <input type='text' className='border-none px-2 h-12 rounded-md bg-[#F3F0F4] text-[#B4ABBA] text-xs' 
            placeholder='Ciroma Chukwu'/>
        </div>
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