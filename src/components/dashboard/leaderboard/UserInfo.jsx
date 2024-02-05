import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from 'react-icons/fa6';

const UserInfo = ({position, highestScore, highestScoreSub, currentScore, increase}) => {
  let posString;
  let lastDigit = position % 10

  if (lastDigit === 1 && position !== 11){
    posString = `${position}st`;
  } else if (lastDigit === 2 && position !== 12){
    posString = `${position}nd`
  } else if (lastDigit === 3 && position !== 13){
    posString = `${position}rd`
  } else {
    posString = `${position}th`
  }

  return (
    <section>
      <div className='text-[#817A86] text-sm p-4 flex justify-between border-b border-[#E6E2E9]'>
        <span>
          <p>Position (All)</p>
        </span>
        <span>
          <p>{posString}</p>
        </span>
      </div>
      <div className='text-[#817A86] text-sm p-4 flex justify-between border-b border-[#E6E2E9]'>
        <span>
          <p>Current Score (All)</p>
        </span>
        <span className='flex flex-row'>
          {currentScore && <span className={`${increase ? 'text-green-400' : 'text-red-600'}`}> {increase ? <FaArrowUpLong/> : <FaArrowDownLong/>}</span>} <p>{currentScore}%</p>
        </span>
      </div>
      <div className='text-[#817A86] text-sm p-4 flex justify-between border-b border-[#E6E2E9]'>
        <span>
          <p>Highest Score (All)</p>
        </span>
        <span>
          {highestScore}%
        </span>
      </div>
      <div className='text-[#817A86] text-sm p-4 flex justify-between border-b border-[#E6E2E9]'>
        <span>
          <p>Highest Subject Score</p>
        </span>
        <span>
          {highestScoreSub}
        </span>
      </div>
    </section>
  )
}

export default UserInfo