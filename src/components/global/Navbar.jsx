import React, { useState, useEffect, useRef } from 'react';
import {FaBars} from 'react-icons/fa';
import Sidebar from './Sidebar';
import logo from '../../img/global/logo1.png'
import { useAuthContext } from '../../context/auth/AuthContext';
import { useAppContext } from '../../context/app/AppContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ nav, setNav ] = useState(false);
  const menuRef = useRef()
  let {setLoginOpen, setSignUpOpen, user, logout} = useAuthContext();
  let {userProfile} = useAppContext();
  let {userExam} = userProfile;

  useEffect(() =>{
    let handler = (e)=>{
      if(!menuRef?.current?.contains(e.target)){
        if(nav){
          setNav(false)
        }
      }
    };
    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <section className='h-16 flex justify-between items-center max-w-[1280px] px-4 mx-auto shadow-lg md:shadow-none'>
      <div className='flex flex-row'>
        <div className='p-2'>
          <img className='h-[25px]' src={logo} alt="logo" />
        </div>
        <div className='hidden md:block ml-4'>
          { user ? 
            (<ul className='flex justify-between text-sm text-[#817A86]'>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard`}>Dashboard</Link></li>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard/quiz/${user.user_id}/${userExam}`}>Quiz</Link></li>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard/exams/${user.user_id}/${userExam}`}>Exams</Link></li>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard/library/${user.user_id}`}>Library</Link></li>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard/profile/${user.user_id}`}>Profile</Link></li>
            <li className='p-4 cursor-pointer'><Link to={`/dashboard/leaderboard/${user.user_id}`}>Leaderboard</Link></li>
          </ul>)
          :
          (<ul className='flex justify-between text-sm text-[#817A86]'>
            <li className='p-4 cursor-pointer'>Home</li>
            <li className='p-4 cursor-pointer'>About</li>
            <li className='p-4 cursor-pointer'>Support</li>
            <li className='p-4 cursor-pointer'>Contact</li>
          </ul>)
          }
        </div>
      </div>

    { user? 
      (<div className="hidden md:block">
        <button className='h-12 bg-[#942BD4] border rounded-md w-[90px] text-sm text-[#FAF9FB]'
        onClick={()=> logout()}
        >Logout</button>
      </div>)      
      :
      (<div className='hidden md:flex w-[190px] justify-between'>
        <button className='h-12 border border-[#942BD4] w-[90px] rounded-md text-sm text-[#942BD4]' 
        onClick={()=> setLoginOpen(true)}
        >Log in</button>
        <button className='h-12 bg-[#942BD4] border rounded-md w-[90px] text-sm text-[#FAF9FB]'
        onClick={()=> setSignUpOpen(true)}
        >Sign up</button>
      </div>)
      }

      <div className='cursor-pointer md:hidden' onClick={()=> {setNav(true)}}>
        <FaBars/>
      </div>
      <Sidebar nav={nav} menuRef={menuRef} sidebar={setNav}/>
    </section>
  )
}

export default Navbar