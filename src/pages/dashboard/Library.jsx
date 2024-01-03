import React, {useEffect, useState} from 'react';
import { useAppContext } from '../../context/app/AppContext';
import { useAuthContext } from '../../context/auth/AuthContext';
import Loader from '../../components/utilities/Loader';
import Intro from '../../components/dashboard/Intro'
import Resource from '../../components/dashboard/library/Resource';
import Filter from '../../components/dashboard/library/Filter';

const Library = () => {
  let {user} = useAuthContext()
  let {userLoggedIn, isLoading} = useAppContext();

  const [book, setBook] = useState(false);
  const [video, setVideo] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (resource) =>{
    if (resource === "Videos"){
      setActiveIndex(0)
      setVideo(true);
      setBook(false);
    }
    if (resource === "Text Books"){
      setActiveIndex(1)
      setVideo(false);
      setBook(true);
    }
  }

  useEffect(()=>{
    userLoggedIn(user);
  }, [])

  return (
    <main>
      {isLoading ? 
      (
        <Loader/>
      )
      : 
      (
        <section>
        <Intro/>
        <Filter handleClick={handleClick}/>
        <Resource video={video} book={book} activeIndex={activeIndex}/>
        </section>
      )
      }
    </main>
  )
}

export default Library