import React from 'react';
import first from '../../../img/dashboard/first.png';
import second from '../../../img/dashboard/second.png'
import third from '../../../img/dashboard/third.png';
import Anon from '../../../img/profile/anon.png'

const UsersLog = ({rank, username, userId, percentage, profilePic}) => {
  let firstName = username ? username.split(" ")[0]: "First Name"
  let lastName = username ? username.split(" ")[1] : "L."
  let id = userId ? userId.split("-")[0]: "12345678AB"

  let rankValue;
  let rankClass;
  let showImage = false;
  let image;

  if (rank === 1){
    showImage = true;
    image = first;
  }
  if (rank === 2){
    showImage = true;
    image = second;
  }
  if (rank === 3){
    showImage = true;
    image = third;
  }
  if (rank > 3){
    rankClass = "p-2 text-[#817A86] text-sm";
    if (rank < 10){
      rankValue = `00${rank}`
    }else if (rank > 10 && rank < 100){
      rankValue = `0${rank}`
    } else {
      rankValue = rank
    }
    
  }
  return (
    <div className='flex justify-between p-4 text-sm border-b border-[#E6E2E9]'>
      <div>
      {
        showImage ? (
          <img className='h-[40px]' src={image} alt="position" />
        ) :
        (
          <span className={rankClass}>{rankValue}</span>
        )
      }
      </div>
      <div className='flex flex-row'>
        <div className="border-[1px] h-[100px] w-[110px] feat rounded-lg border-[#E6E2E9] overflow-hidden">
          <img className="rounded-lg" src={profilePic ? profilePic : Anon} alt="student" />
        </div>
        <div className='ml-4'>
          <p className="font-bold text-sm">{firstName} {lastName[0]}. </p>
          <p className="text-xs font-normal text-[#817A86]">{id}</p>
        </div>
      </div>
      <div className="font-bold text-sm">
        {percentage}%
      </div>
    </div>
  )
}

export default UsersLog