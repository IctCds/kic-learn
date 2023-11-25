import React, {useRef, useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";

const ImageUpload = ({userImage, setUpload, updateImage}) => {
  const [ image, setImage ] = useState("");
  const [ newImage, setNewImage ] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click()
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setNewImage(fileUploaded);
    setImage(URL.createObjectURL(fileUploaded))
  };

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
            <img className='rounded-md' src={image ? image: userImage} alt="preview" />
          </div>
        </div>
      </div>
      <div className='h-[60px] flex items-center justify-center gap-7'>
        <button className='bg-white border border-[#942BD4] w-[100px] py-1 text-sm text-[#942BD4] rounded-lg'
          onClick={handleClick}>
          Upload</button>
        <button className='bg-[#942BD4] border text-sm w-[100px] py-1 text-white rounded-lg'
        onClick={()=> {setUpload(false); updateImage(newImage)}}
        >
        Done</button>
      </div>
      <input type='file' onChange={handleChange} ref={hiddenFileInput} style={{display : 'none'}} accept='image/*'/>
    </div>
  )
}

export default ImageUpload;