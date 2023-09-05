import React from 'react'
import { ReactComponent as Quiz} from '../../svg/Benefits.svg';
import { ReactComponent as Exams} from '../../svg/Benefits1.svg';
import { ReactComponent as Solution} from '../../svg/Benefits2.svg';
import { ReactComponent as Review} from '../../svg/Benefits3.svg';
import { ReactComponent as Video} from '../../svg/Benefits4.svg'

const data = [
  {
    id: 1,
    head: 'Quizzes',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Quiz/>
  },
  {
    id: 2,
    head: 'Mock Exam',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Exams/>
  },
  {
    id: 3,
    head: 'Solution to Questions',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Solution/>
  },
  {
    id: 4,
    head: 'Performance Review',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Review/>
  },
  {
    id: 5,
    head: 'Video Library',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Video/>
  },
]

const Benefits = () => {
  return (
    <section className='bg-[#FAF9FB] max-w-[550px] mx-auto py-8'>
      <div className='grid gap-y-4 max-w-[400px] mx-auto'>
        {data.map((item, index)=>{
          return (
            <div key={index} className='bg-white h-[120px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
              <div className='w-[70%] py-4 px-2'>
                <h3 className='mb-2 text-[#591A7F] font-bold'>{item.head}</h3>
                <p className='text-xs text-[#817A86]'>{item.body}.</p>
              </div>
              <div className='w-[30%] pt-4 px-4 rounded-r-md'>
                <div className='pt-2 h-full bg-[#F5E6FE]'>
                  {item.component}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Benefits