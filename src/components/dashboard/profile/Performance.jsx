import React, {useState, useEffect} from 'react'
import PerformanceCards from './PerformanceCards';
import Pagination from '../quiz/Pagination';
import './profile.css'

let subjects = [
  {
    id: 1,
    name: 'Mathematics',
    scores: [90, 80, 70, 60]
  },
  {
    id: 2,
    name: 'English',
    scores: [65, 70, 82, 55]
  }
]

const Performance = () => {
  const [stats, setStats] = useState([]);

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
  )
}

export default Performance