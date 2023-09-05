import React, { useState, useEffect, useRef } from 'react';
import {FaBars} from 'react-icons/fa';
import Sidebar from './Sidebar';
import logo from '../../img/global/logo1.png'

const Navbar = () => {
  const [ nav, setNav ] = useState(false);
  const menuRef = useRef()

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
    <section className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 shadow-md">
      <div>
        <img className='h-[25px]' src={logo} alt='logo'/>
      </div>
      <div className='cursor-pointer' onClick={()=> setNav(true)}>
        <FaBars/>
      </div>
      <Sidebar nav={nav} menuRef={menuRef}/>
    </section>
  )
}

export default Navbar