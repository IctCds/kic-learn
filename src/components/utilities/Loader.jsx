import React from 'react'

const Loader = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-[#942BD4]"></div>
    </div>
  )
}

export default Loader