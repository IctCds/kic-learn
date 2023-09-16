import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const baseURL = 'http://ictcds.pythonanywhere.com/api/';


  const userLoggedIn = (user) =>{
    if (user){
      setIsLoading(false);
      fetchUser(user.user_id);
    }else{
      setIsLoading(false)
      toast.error("Please login!!", toastPosition)
      navigate('/')
    }
  }

  let fetchUser = async(id)=>{
    let response = await fetch(`${baseURL}/learn/user-profile/${id}/`, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });
    let data = await response.json();
    
    if (response.status === 200){
      setUserProfile(data)
      
      console.log(data);
    } else{
      console.log(response.statusText)
    }
  }

  return (
    <AppContext.Provider
    value={{
      userProfile,
      userLoggedIn,
      isLoading
    }}
    >
    {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>{
  return useContext(AppContext)
}

export {AppContext, AppProvider}