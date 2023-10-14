import React from 'react'
import './profile.css'
import Darrow from "../../../svg/Profile/down arrow.svg";
import editIcon from '../../../svg/Profile/edit.svg';
import eyeIcon from '../../../svg/Profile/eye.svg';
import vector3 from '../../../svg/Profile/Vector 3.svg';

const UpdateDetails = ({userEmail, userExam, profileData}) => {
  return (
    <div className = "card-3">
      <div className = "entry-2">
        <div className = "name-2">
          <div className = "text-wrapper-11">email</div>
          <div className = "text-wrapper-12">{userEmail}</div>
        </div>
      </div>
    
      <div className = "name-wrapper">
        <div className = "name-2">
          <div className = "text-wrapper-11">Password</div>
          <div>
            <input type = "password" value = {profileData.password} disabled className = 'passtyle'/>
            <div className = "buttons" >
              <img className = "edit" alt = "Edit" src = {editIcon} />
              <img className = "vector" alt = "Vector" src = {vector3} />
              <img className = "edit" alt = "Edit" src = {eyeIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className = "frame-4">
        <div className = "text-wrapper-11">Class</div>
        <div className = "passtyle">{userExam === "JSSCE"? "JSS3" : "SSS3"}</div>
        <div className = "buttons">
        <img className = "darrow" alt = "Edit" src = {Darrow} />
        </div>
      </div>
      
      <div className = "frame-5">
        <div className = "text-wrapper-11">Exam type</div>
        <div className = "exam-type">
        {profileData.exam.map((exam, index) =>{
          return (
            <div 
            key={index}
            className = {exam === userExam ? "ex-sel" : "ex"}
            >{exam}</div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default UpdateDetails