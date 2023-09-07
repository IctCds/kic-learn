import React, { useEffect, useRef } from 'react';
import './auth.css';
import { useAuthContext } from '../../context/auth/AuthContext';
import SignUp from './SignUp';
import Login from './Login';

const Auth = () => {
  let { signUpOpen, loginOpen, setSignUpOpen, setLoginOpen } = useAuthContext();
  const authRef = useRef();

  useEffect(() =>{
    let handleClose = (e) =>{
      if(!authRef?.current?.contains(e.target)){
        setSignUpOpen(false);
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);

    return()=>{
      document.removeEventListener('mousedown', handleClose);
    }
  }) 

  return (
    <div className={signUpOpen || loginOpen? 'modal-overlay show-modal': 'modal-overlay'}>
      <div ref={authRef}>
        { signUpOpen ? <SignUp/> : null }
        { loginOpen ? <Login/> : null }
      </div>
    </div>
  )
}

export default Auth;