import React, {useEffect} from 'react'
import './profile.css'

const Privacy = ({firstName, lastName, userExam, userLocation, id, user_pic, pic, toggle, toggle1, location, exam, showExam, showLocation}) => {

  const setLocation = () =>{
    showLocation ? localStorage.removeItem('location') : localStorage.setItem('location', "false")
  }

  const setExam = () =>{
    showExam ? localStorage.removeItem('exam') : localStorage.setItem('exam', "false")
  }

  useEffect(()=>{
    setLocation();
    setExam()
  },[showExam, showLocation])

  return (
    <div>
      <div className = "description-2 mb-10">
        <div className = "frame">
          <div className = "text-wrapper-22">Privacy settings</div>
        </div>
        <div className = "div-wrapper">
          <p className = "div">Manage your privacy settings, choose what information is visible to others.</p>
        </div>
      </div>
      <div className = "HERO-2 mb-10">
        <div className = "credentials">
          <div className = "text-wrapper-9">{firstName} {lastName}</div>
          <div className = "text-wrapper-10">ID: {id}</div>
          {showExam && <div className = "text-wrapper-10">{userExam}</div>}
          <div className = "text-wrapper-10">{showLocation && <div>Location: {userLocation}</div>}</div>
        </div>
        <div className='profile-instance1 feat'>
          <img className = "rounded-[8px]" alt = "Edit or upload pics" src = {user_pic ? user_pic : pic} />
        </div>
      </div>
      <div className = "frame-14">
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Location</div>
            <img className = "toggle" alt = "Edit" src = {showLocation? toggle1: toggle} onClick={()=> location(!showLocation)}/>
          </div>
        </div>
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Exam Type</div>
            <img className = "toggle" alt = "Edit" src = {showExam? toggle1: toggle} onClick={()=> exam(!showExam)}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Privacy