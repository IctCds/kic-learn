import React from 'react';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/auth/AuthContext';
import { useAppContext } from '../../context/app/AppContext';

const Sidebar = ({nav, menuRef, sidebar}) => {
  let {setLoginOpen, user, logout} = useAuthContext()
  let {userProfile} = useAppContext();
  let {userExam} = userProfile;
  return (
    <ul ref={menuRef} className={nav ? 'bg-white z-50 fixed right-0 top-0 w-[50%] h-full shadow-md ease-in-out duration-500 px-2 py-6 text-sm text-gray-700' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    { !user ?
      (
        <span>
        <li className='p-4 border-b border-gray-100'><Link to='/' onClick={()=>{sidebar(false)}}>Home</Link></li>
        <li className='p-4 border-b border-gray-100'>About</li>
        <li className='p-4 border-b border-gray-100'>Support</li>
        <li className='p-4 border-b border-gray-100'>Contact</li>
        <li className='p-4'>
          <button className='p-2 border border-purple-700 rounded-md'
          onClick={()=> {sidebar(false); setLoginOpen(true)}}
          >Login</button>
        </li>
        </span>
      )
        :
      (
        <span>
        <li className='p-4 border-b border-gray-100'><Link to={`/dashboard/quiz/${user.user_id}/${userExam}`} onClick={()=>{sidebar(false)}}>Quiz</Link></li>
        <li className='p-4 border-b border-gray-100'><Link to={`/dashboard/exams/${user.user_id}/${userExam}`} onClick={()=>{sidebar(false)}}>Exams</Link></li>
        <li className='p-4 border-b border-gray-100'><Link to={`/dashboard/library/${user.user_id}`} onClick={()=>{sidebar(false)}}>Library</Link></li>
        <li className='p-4 border-b border-gray-100'><Link to={`/dashboard/report/${user.user_id}`} onClick={()=>{sidebar(false)}}>Report card</Link></li>
        <li className='p-4 border-b border-gray-100'><Link to={`/dashboard/profile/${user.user_id}`} onClick={()=>{sidebar(false)}}>Profile</Link></li>
        <li className='p-4'>
          <button className='p-2 border border-purple-700 rounded-md'
          onClick={()=> {sidebar(false); logout()}}
          >Logout</button>
        </li>
        </span>
      )
    }
    </ul>
  )
}

export default Sidebar