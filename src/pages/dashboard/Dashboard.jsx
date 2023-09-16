import React, { useEffect} from 'react';
import Intro from '../../components/dashboard/Intro';
import Features from '../../components/dashboard/Features';
import { useAuthContext } from '../../context/auth/AuthContext';
import { useAppContext } from '../../context/app/AppContext';


const Dashboard = () => {
  const {user} = useAuthContext()
  const {userProfile, isLoading, userLoggedIn} = useAppContext();


  useEffect(()=>{
    userLoggedIn(user);
  }, [])

  return (
    <main className="max-w-[1280px] mx-auto pt-8">
    {
      isLoading ? (
        <div class=" flex h-screen justify-center items-center">
          <div class="animate-spin rounded-full h-32 w-32 border-b-4 border-[#942BD4]"></div>
        </div>
      ):
      (
        <div>
        <Intro/>
        <Features profile={userProfile}/>
        </div>
      )
    }
    </main>
  )
}

export default Dashboard;