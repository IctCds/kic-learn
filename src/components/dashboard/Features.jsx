import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Quiz} from '../../svg/Benefits.svg';
import { ReactComponent as Exams} from '../../svg/Benefits5.svg';
import { ReactComponent as Video} from '../../svg/Benefits6.svg';
import { ReactComponent as ReportCard} from '../../svg/Benefits3.svg';
import { ReactComponent as ProfileCard} from '../../svg/Benefits7.svg';
import {AiOutlineArrowRight} from 'react-icons/ai';


const Features = ({profile}) => {
  const {user, userExam} = profile;
  return (
    <section className='my-10 bg-[#FAF9FB] md:bg-white max-w-[1100px] mx-auto py-8'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
          <div className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
            <div className='w-[70%] py-4 px-2'>
              <h3 className='mb-2 text-[#591A7F] font-bold'>
                Take a quiz
              </h3>
              <p className='text-xs text-[#817A86] mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <Link to={`/dashboard/quiz/${user}/${userExam}`}>
                <button className='bg-[#942BD4] py-1 px-2 rounded-md text-gray-100'>
                  <AiOutlineArrowRight size={10}/>
                </button>
              </Link>
            </div>
            <div className='w-[30%] pt-10 px-4 rounded-r-md'>
              <div className='pt-2 pl-1 h-full bg-[#F5E6FE]'>
                <Quiz/>
              </div>
            </div>
          </div>

          <div className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
            <div className='w-[70%] py-4 px-2'>
              <h3 className='mb-2 text-[#417F1A] font-bold'>
                Write my exams
              </h3>
              <p className='text-xs text-[#817A86] mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <Link to={`/dashboard/exams/${user}/${userExam}`}>
                <button className='bg-[#6CD42B] py-1 px-2 rounded-md text-gray-100'>
                  <AiOutlineArrowRight size={10}/>
                </button>
              </Link>
            </div>
            <div className='w-[30%] pt-10 px-4 rounded-r-md'>
              <div className='pt-2 pl-1 h-full bg-[#EFFEE6]'>
                <Exams/>
              </div>
            </div>
          </div>

          <div className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
            <div className='w-[70%] py-4 px-2'>
              <h3 className='mb-2 text-[#1A5D7F] font-bold'>
                Visit the library
              </h3>
              <p className='text-xs text-[#817A86] mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <Link to={`/dashboard/library/${user}`}>
                <button className='bg-[#2B9CD4] py-1 px-2 rounded-md text-gray-100'>
                  <AiOutlineArrowRight size={10}/>
                </button>
              </Link>
            </div>
            <div className='w-[30%] pt-10 px-4 rounded-r-md'>
              <div className='pt-2 pl-1 h-full bg-[#E6F6FE]'>
                <Video/>
              </div>
            </div>
          </div>

          <div className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
            <div className='w-[70%] py-4 px-2'>
              <h3 className='mb-2 text-[#591A7F] font-bold'>
                Get my report card
              </h3>
              <p className='text-xs text-[#817A86] mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <Link to={`/dashboard/report/${user}`}>
                <button className='bg-[#942BD4] py-1 px-2 rounded-md text-gray-100'>
                  <AiOutlineArrowRight size={10}/>
                </button>
              </Link>
            </div>
            <div className='w-[30%] pt-10 px-4 rounded-r-md'>
              <div className='pt-2 pl-1 h-full bg-[#F5E6FE]'>
                <ReportCard/>
              </div>
            </div>
          </div>

          <div className='bg-white h-[140px] w-[300px] mx-auto flex flex-row rounded-md shadow-md'>
            <div className='w-[70%] py-4 px-2'>
              <h3 className='mb-2 text-[#417F1A] font-bold'>
                Edit my profile
              </h3>
              <p className='text-xs text-[#817A86] mb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <Link to={`/dashboard/profile/${user}`}>
                <button className='bg-[#6CD42B] py-1 px-2 rounded-md text-gray-100'>
                  <AiOutlineArrowRight size={10}/>
                </button>
              </Link>
            </div>
            <div className='w-[30%] pt-10 px-4 rounded-r-md'>
              <div className='pt-2 pl-1 h-full bg-[#EFFEE6]'>
                <ProfileCard/>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Features