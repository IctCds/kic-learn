import React, {useState} from 'react';
import {CiSearch} from 'react-icons/ci'

const Filter = ({handleClick}) => {

  const [active, setActive] = useState(0)

  let data = [{
    options: ["Mathematics"]
  },
  {
    options: ["Algebra"]
  }
  ]

  let resource = ["Videos", "Text Books"]
  
  return (
    <section className='max-w-[1100px] mx-auto px-4 py-4'>
      <div className="mb-4">
        <p className="text-xs text-[#817A86] font-medium leading-4 mb-1">
          Choose a subject
        </p>
        <div className="relative h-10 flex items-center">
          <select className="bg-[#F3F0F4] border-[1px] border-[#E6E2E9] rounded-lg  px-2 text-sm leading-5 text-[#817A86] w-full focus:outline-none focus:border-[#942BD4] appearance-none h-full">
            {data[0].options.map((option) => {
              return (
                <option key={option} className="">
                  {option}
                </option>
              );
            })}
          </select>
          <div className="absolute right-2 text-[#817A86]" >
            <CiSearch />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs text-[#817A86] font-medium leading-4 mb-1">
          Select a topic
        </p>
        <div className="relative h-10 flex items-center">
          <select className="bg-[#F3F0F4] border-[1px] border-[#E6E2E9] rounded-lg  px-2 text-sm leading-5 text-[#817A86] w-full focus:outline-none focus:border-[#942BD4] appearance-none h-full">
            {data[1].options.map((option) => {
              return (
                <option key={option} className="">
                  {option}
                </option>
              );
            })}
          </select>
          <div className="absolute right-2 text-[#817A86]" >
            <CiSearch />
          </div>
        </div>
      </div>

      <div className='bg-[#F3F0F4] mb-6 p-2 rounded-md'>
        <div className='flex justify-between'>
            {resource.map((item, index) =>{
              return (
                <button
                key={index}
                className={`text-[#817A86] ${active === index ? "bg-white" : "bg-[#F3F0F4]"} rounded-md py-2 w-[48%]`}
                onClick={()=> {setActive(index); handleClick(item)}}
                >
                {item}
                </button>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Filter