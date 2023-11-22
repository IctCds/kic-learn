import React from 'react'

const Dialog = ({exam, newExam, setDialog }) => {
  return (
    <div className='w-[300px] bg-white text-gray-800 flex flex-col py-4 px-2 rounded-md shadow-md'>
    <div>
      <p className='text-sm'>
        Are you sure you want to switch exams from <span className='font-semibold'>{exam}</span> to <span className='font-semibold'>{newExam}</span>?
      </p>
    </div> 
      <div className="mt-2 flex justify-end gap-5">
        <button
          className="text-[#942BDA] underline text-xs font-medium"
          onClick={()=> setDialog(false)}
        >
          NO
        </button>
        <button
          className="bg-[#942BD4] text-white rounded-lg text-xs font-medium px-4 py-2"
          onClick={()=> setDialog(false)}
        >
          YES
        </button>
      </div>
    </div>
  )
}

export default Dialog;