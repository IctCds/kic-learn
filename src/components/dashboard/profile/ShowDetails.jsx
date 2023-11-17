import React from 'react'
import './profile.css'

const ShowDetails = ({firstName, lastName, location}) => {
  return (
    <div className = "card-2">
      <div className = "entry">
        <div className = "name-2">
          <div className = "text-wrapper-11">Full Name</div>
          <div className = "text-wrapper-12">{firstName} {lastName}</div>
        </div>
      </div>
      <div className = "entry">
        <div className = "name-2">
          <div className = "text-wrapper-11">Location</div>
          <div className = "text-wrapper-12"> {location}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowDetails