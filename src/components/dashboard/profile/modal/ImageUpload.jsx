import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const ImageUpload = ({userImage, setUpload}) => {
  return (
    <div className='w-[300px] h-[280px] bg-white'>
      <div className='h-[220px] bg-[#E6E2E9] relative'>
        <span className='absolute w-full flex justify-end p-1'>
          <span className='bg-[#CDC7D1] p-1 border rounded-md text-white cursor-pointer' onClick={()=> setUpload(false)}>
            <AiOutlineClose size={20}/>
          </span>
        </span>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='feat h-[140px] w-[150px] rounded-md'>
            <img className='rounded-md' src={userImage} alt="preview" />
          </div>
        </div>
      </div>
      <div className='h-[60px] flex items-center justify-center gap-7'>
        <button className='bg-white border border-[#942BD4] w-[100px] py-1 text-sm text-[#942BD4] rounded-lg'>Upload</button>
        <button className='bg-[#942BD4] border text-sm w-[100px] py-1 text-white rounded-lg'>Done</button>
      </div>
    </div>
  )
}

export default ImageUpload;