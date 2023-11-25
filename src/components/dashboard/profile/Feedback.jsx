import React, {useState} from 'react';
import { IoMdCheckmark } from "react-icons/io";
import './profile.css'

const Feedback = ({star1, star2}) => {
  const [rating, setRating] = useState(0);
  const [active, setActive] = useState(false);
  const [ notifs, setNotifs] = useState(false);
  return (
    <div className = "frame-14 mb-10">
      <div>
        <div>
          <div className = "mb-2 w-[220px] mx-auto flex justify-between">
            <img className = 'star1' alt = "Star" src = {rating > 0 ? star1 : star2} onClick={()=> setRating(1)}/>
            <img className = 'star1' alt = "Star" src = {rating > 1 ? star1 : star2} onClick={()=> setRating(2)}/>
            <img className = 'star1' alt = "Star" src = {rating > 2 ? star1 : star2} onClick={()=> setRating(3)}/>
            <img className = 'star2' alt = "Star" src = {rating > 3 ? star1 : star2} onClick={()=> setRating(4)}/>
            <img className = 'star2' alt = "Star" src = {rating > 4 ? star1 : star2} onClick={()=> setRating(5)}/>
          </div>
        </div>
        <div>
          <div>
            <div className = "du">
              <div className = "sug">
                <p>What do you think about our platform? Give us your feedback.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className='relative'>
            { notifs ? 
              (<div className='absolute pt-12 w-full'>
              <div className='bg-white px-1 py-4 flex flex-row text-sm w-[250px] mx-auto shadow-md rounded-md'>
                <span className="w-[20%] text-white flex justify-center">
                  <span className='bg-green-100 h-[30px] w-[30px] rounded-full flex justify-center items-center'>
                  <span className="bg-green-500 h-[20px] w-[20px] rounded-full flex justify-center items-center">
                    <IoMdCheckmark size={18}/>
                  </span>
                  </span>
                </span>
                <span className='ml-2 w-[75%]'>
                  <h3 className='text-xs text-[#817A86]'>Thank you! We have recieved your feedback.</h3>
                </span>
              </div>
            </div>)
            :
            null
            }
            <div className='mt-2'>
                <textarea className='bg-[#E6E2E9] text-[#817A86] text-xs w-full rounded-md p-2 focus:outline-[#942BD4] focus:bg-[#F3F0F4]' 
                name="feedback" rows="4" placeholder='Tell us what you think...' required onClick={()=> setActive(true)}></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button className={`bg-[${active ? '#942BD4' : '#E6E2E9'}] text-[${active ? '#FAF9FB' : '#817A86'}] border rounded-lg p-2 text-sm`}
              onClick={()=> setActive(false)}>
              Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feedback;