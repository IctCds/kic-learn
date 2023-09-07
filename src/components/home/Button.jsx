import React from 'react';
import { useAuthContext } from '../../context/auth/AuthContext';

const Button = () => {
  let {setSignUpOpen} = useAuthContext();

  return (
    <section className='max-w-[500px] mx-auto py-10 flex justify-center'>
      <button className='bg-[#942BD4] p-3 border rounded-md text-sm text-[#FAF9FB]'
      onClick={()=> setSignUpOpen(true)}
      >Get Started</button>
    </section>
  )
}

export default Button