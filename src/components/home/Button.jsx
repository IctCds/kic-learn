import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/AuthContext';

const Button = () => {
  let {setSignUpOpen, user} = useAuthContext();

  const navigate = useNavigate();

  return (
    <section className="w-full py-10 flex justify-center">
      <button className="bg-[#942bd4] p-3 border rounded-md text-sm text-[#FAF9FB] md:w-[250px]"
      onClick={()=> {user? navigate(`/dashboard`) : setSignUpOpen(true)}}
      >Get Started</button>
    </section>
  )
}

export default Button;