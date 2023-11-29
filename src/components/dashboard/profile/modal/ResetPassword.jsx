import React, {useState} from 'react'
import {BiLock} from 'react-icons/bi';
import {FiEye, FiEyeOff} from 'react-icons/fi';
import { useAuthContext } from '../../../../context/auth/AuthContext';
import { toast } from 'react-toastify';

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

const ResetPassword = ({setPassword}) => {
  let {authTokens, user} = useAuthContext();
  const [ loading, setLoading ] = useState(false);
  const [changePassword, setChangePassword] = useState(true);
  const [changePassword1, setChangePassword1] = useState(true);
  const [changePassword2, setChangePassword2] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const changeIcon1 = changePassword1 === true ? false : true;
  const changeIcon2 = changePassword2 === true ? false : true;

  const baseURL = 'http://ictcds.pythonanywhere.com/api/';

  const updatePassword = async(e)=> {
    setLoading(true);
    e.preventDefault()
    if (e.target.password1.value.length < 8){
      setLoading(false);
      toast.error("New Password must have 8 characters", toastPosition)
    }else if (e.target.password1.value !== e.target.password2.value) {
      setLoading(false);
      toast.error("New passwords don't match", toastPosition)
    } else {
      let response = await fetch(`${baseURL}accounts/change_password/${user.user_id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authTokens ? `Bearer ${authTokens.access}`: null 
        },
        body:JSON.stringify({'old_password': e.target.password.value, 'password': e.target.password1.value, 'password2': e.target.password2.value})
      })

      if (response.status === 200){
        setLoading(false);
        setPassword(false);
        toast.success("Password has been updated!!", toastPosition)
      } else {
        setLoading(false);
        toast.error("Old password is invalid", toastPosition)
      }
    }
  }

  return (
    <div className='h-[400px] w-[300px] bg-white rounded-md px-4 py-2'>
      <form className='w-full mt-2 py-4' onSubmit={updatePassword}>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Old Password</label>
            <div className='relative flex items-center'>
              <span className='w-full absolute text-gray-300 px-3 flex justify-between'>
                <span><BiLock/></span>
                <span onClick={()=> setChangePassword(changeIcon)}>{changeIcon ? <FiEye/> : <FiEyeOff/>}</span>
              </span>
              <input type={changePassword ? 'password' : 'text'} name='password' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
                placeholder='**********'/>
            </div>
          </div>
        <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>New Password</label>
            <div className='relative flex items-center'>
              <span className='w-full absolute text-gray-300 px-3 flex justify-between'>
                <span><BiLock/></span>
                <span onClick={()=> setChangePassword1(changeIcon1)}>{changeIcon1 ? <FiEye/> : <FiEyeOff/>}</span>
              </span>
              <input type={changePassword1 ? 'password' : 'text'} name='password1' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
                placeholder='**********'/>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='text-xs font-semibold text-[#817A86] mb-2'>Confirm New Password</label>
          <div className='relative flex items-center'>
            <span className='w-full absolute text-gray-300 px-3 flex justify-between'>
              <span><BiLock/></span>
              <span onClick={()=> setChangePassword2(changeIcon2)}>{changeIcon2 ? <FiEye/> : <FiEyeOff/>}</span>
            </span>
            <input type={changePassword2 ? 'password' : 'text'} name='password2' className='w-full border-none pr-2 pl-10 h-12 rounded-md bg-[#F3F0F4] placeholder-[#B4ABBA] text-gray-800 text-xs focus:outline-[#942BD4]' 
              placeholder='**********'/>
          </div>
        </div>
        <div>
          <input type='submit' value={loading ? "Resetting Password..." :"Reset Password"} className='w-full h-12 rounded-md bg-[#942BD4] text-[#FAF9FB] text-sm cursor-pointer'/>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword;