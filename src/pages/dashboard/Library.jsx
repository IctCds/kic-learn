import React, {useEffect} from 'react';
import Construction from '../../components/utilities/Construction';
import { useAppContext } from '../../context/app/AppContext';
import { useAuthContext } from '../../context/auth/AuthContext';

const Library = () => {
  let {user} = useAuthContext()
  let {userLoggedIn, isLoading} = useAppContext();

  useEffect(()=>{
    userLoggedIn(user);
  }, [])

  return (
    <div>
      {isLoading ? 
      (
        <div className=" flex h-screen justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-[#942BD4]"></div>
        </div>
      )
      : 
      (
        <Construction/>
      )
      }
    </div>
  )
}

export default Library