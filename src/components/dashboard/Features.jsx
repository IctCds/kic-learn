import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Quiz} from '../../svg/Benefits.svg';
import { ReactComponent as Exams} from '../../svg/Benefits5.svg';
import { ReactComponent as Video} from '../../svg/Benefits6.svg';
import { ReactComponent as ReportCard} from '../../svg/Benefits3.svg';
import { ReactComponent as ProfileCard} from '../../svg/Benefits7.svg';
import {AiOutlineArrowRight} from 'react-icons/ai';

const data = [
  {
    id: 1,
    head: 'Take a quiz',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Quiz/>,
    textColor: '#591A7F',
    bgColor: '#F5E6FE',
    buttonColor: '#942BD4',
    link: '/dashboard/quiz'
  },
  {
    id: 2,
    head: 'Write my exams',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Exams/>,
    textColor: '#417F1A',
    bgColor: '#EFFEE6',
    buttonColor: '#6CD42B',
    link: '/dashboard/exams'
  },
  {
    id: 3,
    head: 'Visit the library',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <Video/>,
    textColor: '#1A5D7F',
    bgColor: '#E6F6FE',
    buttonColor: '#2B9CD4',
    link: '/dashboard/library'
  },
  {
    id: 4,
    head: 'Get my report card',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <ReportCard/>,
    textColor: '#591A7F',
    bgColor: '#F5E6FE',
    buttonColor: '#942BD4',
    link: '/dashboard/report'
  },
  {
    id: 5,
    head: 'Edit my profile',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    component: <ProfileCard/>,
    textColor: '#417F1A',
    bgColor: '#EFFEE6',
    buttonColor: '#6CD42B',
    link: '/dashboard/profile'
  },
]


const Features = () => {
  return (
    <section className='my-10 bg-[#FAF9FB] max-w-[550px] mx-auto py-8'>
      <div className='grid gap-y-4 max-w-[400px] mx-auto'>
        {data.map((item, index)=>{
          return (
            <div key={index} className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
              <div className='w-[70%] py-4 px-2'>
                <h3 className={`mb-2 text-[${item.textColor}] font-bold`}>{item.head}</h3>
                <p className='text-xs text-[#817A86] mb-2'>{item.body}.</p>

                <Link to={item.link}>
                  <button className={`bg-[${item.buttonColor}] py-1 px-2 rounded-md text-gray-100`}>
                    <AiOutlineArrowRight size={10}/>
                  </button>
                </Link>
              </div>
              <div className='w-[30%] pt-10 px-4 rounded-r-md'>
                <div className={`pt-2 pl-1 h-full bg-[${item.bgColor}]`}>
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

export default Features