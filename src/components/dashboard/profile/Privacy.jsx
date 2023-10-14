import React from 'react'
import './profile.css'

const Privacy = ({firstName, lastName, userExam, id, user_pic, pic, toggle, toggle1}) => {
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
          <div className = "text-wrapper-10">{userExam}</div>
        </div>
        <img className = "profile-instance1" alt = "Edit or upload pics" src = {user_pic ? user_pic : pic} />
      </div>
      <div className = "frame-14">
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Location</div>
            <img className = "toggle" alt = "Edit" src = {toggle} />
          </div>
        </div>
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Exam Type</div>
            <img className = "toggle" alt = "Edit" src = {toggle1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy