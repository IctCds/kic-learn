import React from 'react'
import './profile.css'
import Darrow from "../../../svg/Profile/down arrow.svg";
import editIcon from '../../../svg/Profile/edit.svg';
// import eyeIcon from '../../../svg/Profile/eye.svg';
// import vector3 from '../../../svg/Profile/Vector 3.svg';

let classes = ["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"]

const UpdateDetails = ({userEmail, userExam, profileData, handleClick, openPassword}) => {
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
            <div className = "buttons mt-2" >
              <img className = "edit cursor-pointer" alt = "Edit" src = {editIcon} onClick={()=> openPassword(true)}/>
              {/* {<img className = "vector" alt = "Vector" src = {vector3} />
              <img className = "edit" alt = "Edit" src = {eyeIcon} />} */}
            </div>
          </div>
        </div>
      </div>
      <div className = "frame-4">
        <div className = "text-wrapper-11">Class</div>
        <select className = "passtyle focus:outline-none focus:border-[#942BD4] appearance-none">
          {classes.map((item)=>{
            return (
              <option key={item}>
                {item}
              </option>
            )
          })}
        </select>
        <div className = "buttons mt-2 pointer-events-none">
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
            className = {exam === userExam ? "ex-sel cursor-pointer" : "ex cursor-pointer"}
            onClick={()=> handleClick(exam)}
            >{exam}</div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default UpdateDetails