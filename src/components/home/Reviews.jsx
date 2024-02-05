import React, {useState, useEffect} from 'react';
import star1 from '../../svg/Profile/Star 1.svg'
import star2 from '../../svg/Profile/Star 2.svg'

const Reviews = () => {
  const [data, setData] = useState([])

  let url = `https://ictcds.pythonanywhere.com/api/learn/users-feedback/`

  const getReviews = async()=>{
    let response = await fetch(url, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    })

    let resData = await response.json()

    if (response.status === 200){
      setData(resData)
    } else {
      console.log(response.statusText)
    }
  }

  useEffect(()=>{
    getReviews();
  }, [])
  return (
    <section className='pt-8 hidden lg:block'>
      <div className='max-w-[1080px] py-4 mx-auto flex justify-between overflow-x-auto'>
        {data.map((item, index)=>{
          let star = []
          let emptyStar = []
          let starVal = 5 - item.rating
          for (let i = 1; i <= item.rating; i++){
            star.push(i);
          }
          if (starVal > 0){
            for (let j = 1; j <= starVal; j++){
              emptyStar.push(j)
            }
          }
          return (
            <div key={index} className='h-[190px] w-[300px] mx-2 bg-[#FBF5FF] text-[#591A7F] p-2 rounded-md'>
              <span className='flex flex-row mb-2'>
                {star.map((index) => {
                  return (
                    <img key={index} src={star1} alt="star" />
                  )
                })}

                {emptyStar.map((index) => {
                  return (
                    <img key={index} src={star2} alt="star" />
                  )
                })}
              </span>
              <h3 className='font-bold mb-2'>{item.userName}</h3>
              <p className='text-xs'>{item.review}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews