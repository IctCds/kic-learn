import React from 'react';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/auth/AuthContext';

const Sidebar = ({nav, menuRef, sidebar}) => {
  let {setLoginOpen} = useAuthContext()
  return (
    <ul ref={menuRef} className={nav ? 'bg-white z-50 fixed right-0 top-0 w-[50%] h-full shadow-md ease-in-out duration-500 px-2 py-6 text-sm text-gray-700' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <li className='p-4 border-b border-gray-100'><Link to='/'>Home</Link></li>
      <li className='p-4 border-b border-gray-100'>About</li>
      <li className='p-4 border-b border-gray-100'>Support</li>
      <li className='p-4 border-b border-gray-100'>Contact</li>
      <li className='p-4'>
        <button className='p-2 border border-purple-700 rounded-md'
        onClick={()=> {sidebar(false); setLoginOpen(true)}}
        >Login</button>
      </li>
    </ul>
  )
}

export default Sidebar