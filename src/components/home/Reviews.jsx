import React from 'react'
import star1 from '../../svg/Profile/Star 1.svg'
import star2 from '../../svg/Profile/Star 2.svg'

const data = [
  {
    id: 1,
    name: "Reviewer's name",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 2,
    name: "Reviewer's name",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    id: 3,
    name: "Reviewer's name",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

const Reviews = () => {
  return (
    <section className='pt-8 hidden lg:block'>
      <div className='max-w-[1080px] py-4 mx-auto flex justify-between overflow-x-auto'>
        {data.map((item, index)=>{
          return (
            <div key={index} className='h-[190px] w-[300px] mx-2 bg-[#FBF5FF] text-[#591A7F] p-2 rounded-md'>
              <span className='flex flex-row mb-2'>
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star2} alt="star" />
                <img src={star2} alt="star" />
              </span>
              <h3 className='font-bold mb-2'>{item.name}</h3>
              <p className='text-xs'>{item.review}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews