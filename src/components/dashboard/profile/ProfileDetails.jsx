import React from 'react'
import './profile.css'

const ProfileDetails = ({firstName, lastName, id, user_pic, pic, userExam, showExam, showLocation, location}) => {
  return (
    <div className = "frame-2">
      <div className = "frame-3">
        <div className = "text-wrapper-8">PROFILE</div>
      </div>
      <div className = "HERO">
        <div className = "credentials">
          <div className = "text-wrapper-9">{firstName} {lastName[0]}.</div>
          <div className = "text-wrapper-10">ID: {id}</div>
          {showExam && <div className = "text-wrapper-10">{userExam}</div>}
          <div className = "text-wrapper-10">{showLocation && <div>Location: {location}</div>}</div>
        </div>
        <img className = "profile-instance h-[150px]" alt = "Edit or upload pics" src = {user_pic? user_pic : pic} />
      </div>
    </div>
  )
}

export default ProfileDetails