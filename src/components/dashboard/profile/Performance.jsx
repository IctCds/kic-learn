import React, {useState, useEffect} from 'react'
import PerformanceCards from './PerformanceCards';
import Pagination from '../quiz/Pagination';
import './profile.css';
import { Link } from 'react-router-dom';

let subjects = [
  // {
  //   id: 1,
  //   name: 'Mathematics',
  //   scores: [90, 80, 70, 60]
  // },
  // {
  //   id: 2,
  //   name: 'English',
  //   scores: [65, 70, 82, 55]
  // }
]

const Performance = ({profile}) => {
  const [stats, setStats] = useState([]);
  let {user, userExam} = profile

  const avg = arr =>{
    let sum = arr.reduce((acc, cur) => acc + cur);
    return sum / arr.length
  }

  const max = arr => {
    return arr.reduce((a,b) => {return Math.max(a,b)});
  }


  useEffect(()=>{
    if (subjects.length > 0){
      const res = subjects.map((subject)=>({
        id: subject.id,
        name: subject.name,
        highScore : max(subject.scores),
        avgScore: avg(subject.scores)
      }));
  
      setStats(res);
    }
  }, [])

  return (
    <main>
      {
        stats.length > 0 ?
          <div className = "subject-cards">
        
          <div className = "description">
            <div className = "frame-6">
              <div className = "text-wrapper-13">Performance</div>
            </div>
            <div className = "frame-7">
              <p className = "text-wrapper-14">View and evaluate your overall performance on all your learnings.</p>
            </div>
          </div>
          <div className = "frame-3">
            <div className = "text-wrapper-8">WAEC [SENIOR]</div>
          </div>
          <div className = "subject-cards-2">
          {stats.map((item)=>{
            return(
              <PerformanceCards key={item.id} stats={item}/>
            )
          })}
          </div>
          <div>
            <Pagination page = {3} />
          </div>
            
          </div>
          :

          <div className='w-[320px] bg-[#FAF9FB] p-4 mt-4'>
            <h3 className='text-sm text-[#4D4950]'>Performance</h3>
            <p className='mt-2 text-xs text-[#817A86] tracking-wide'>You have not taken any quiz or exam, take a quiz or exam to see your performance. Note: you must have attempted quizzes on 
              all subjects before taking an exam.
            </p>
            <Link to={`/dashboard/quiz/${user}/${userExam}`}>
            <button className='mt-4 bg-[#942BD4] w-full border rounded-md p-2 text-sm text-[#FAF9FB]'>Take a Quiz</button>
            </Link>
          </div>
      }
      
      </main>
  )
}

export default Performance