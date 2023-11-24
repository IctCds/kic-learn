import React from 'react'
import './profile.css'
import editIcon from '../../../svg/Profile/edit.svg'

const ProfileDetails = ({firstName, lastName, id, user_pic, pic, userExam, showExam, showLocation, location, upload}) => {
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
        <div className='relative feat h-[140px] w-[150px] rounded-md'>
          <span className='absolute w-full flex justify-end p-2'>
            <span className='border rounded-md'>
              <img className='cursor-pointer' src={editIcon} alt="edit"  onClick={()=> upload(user_pic? user_pic: pic)}/>
            </span>
          </span>
          <img className = "rounded-md" alt = "Edit or upload pics" src = {user_pic? user_pic : pic} />
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails