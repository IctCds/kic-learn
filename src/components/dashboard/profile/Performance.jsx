import React, {useState, useEffect} from 'react'
import PerformanceCards from './PerformanceCards';
import Pagination from '../quiz/Pagination';
import './profile.css';
import { Link } from 'react-router-dom';


const Performance = ({profile}) => {
  const [stats, setStats] = useState([]);
  const [subjects, setSubjects] = useState([]);
  let {user, userExam} = profile

  const baseURL = 'http://ictcds.pythonanywhere.com/api/';

  const avg = arr =>{
    let sum = arr.reduce((acc, cur) => acc + cur);
    return sum / arr.length
  }

  const max = arr => {
    return arr.reduce((a,b) => {return Math.max(a,b)});
  }


  const getResults = async()=>{
    let response = await fetch(`${baseURL}learn/user-profile-results/${user}/`, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });

    let data = await response.json()
    if (response.status === 200){
      setSubjects(data.performance)
    } else {
      console.log(response.statusText)
    }
  }


  useEffect(()=>{
    getResults();
  }, [])


  useEffect(()=>{
    if (subjects.length > 0){
      const res = subjects.map((subject)=>({
        id: subject.id,
        name: subject.subject,
        highScore : max(subject.scores),
        avgScore: avg(subject.scores)
      }));
  
      setStats(res);
    }
  }, [subjects])

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
          <div className='hidden'>
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