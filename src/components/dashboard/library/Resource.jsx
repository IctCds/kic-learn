import React from 'react'
import Books from '../../../img/dashboard/books.png'
import Videos from '../../../img/dashboard/videos.png'

const Resource = ({video, book, activeIndex}) => {
  let videoCaption = "Video Title in 2 lines max. Lorem ipsum is simply dummy text of the printing";
  let bookCaption = "Book Title in 2 lines max. Lorem is."

  let numResource = [{
    data: [1,2,3,4,5,6]
  },
  {
    data: [1,2,3,4,5,6,7,8,9,10,11,12]
  }
]

  return (
    <section className={`max-w-[1100px] mx-auto px-4 grid gap-y-10 ${video? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"} py-6 md:py-12`}>
      {
        numResource[activeIndex].data.map((item)=>{
          return(
            <div
            key={item}
            >
            <div className={`mx-auto text-[#817A86] ${video ? "w-[60%] md:w-[70%] lg:w-[75%]": "w-[75%]"}`}>
              <img className={`${video && "h-[130px]"}`} src={video ? Videos : Books} alt="Resource" />
                <p className={`text-xs my-4 ${video? "w-[250px]" : "w-[150px] lg:w-full"}`}>
                {video ? videoCaption : bookCaption}
                </p>
                {video && (
                  <span className='flex justify-between w-[180px] text-xs'>
                    <span>12K VIEWS</span>
                    <span>1 MONTH AGO</span>
                  </span>
                )}

                {book && (
                  <span className='text-xs'>12K DOWNLOADS</span>
                )}
            </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default Resource