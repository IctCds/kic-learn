import React from 'react'
import './profile.css'

const Feedback = ({star1, star2}) => {
  return (
    <div className = "frame-14 mb-10">
      <div>
        <div>
          <div className = "div-wrapper">
            <img className = 'star1' alt = "Star" src = {star1}/>
            <img className = 'star1' alt = "Star" src = {star1}/>
            <img className = 'star1' alt = "Star" src = {star1}/>
            <img className = 'star2' alt = "Star" src = {star2}/>
            <img className = 'star2' alt = "Star" src = {star2}/>
          </div>
        </div>
        <div>
          <div>
            <div className = "du">
              <div className = "sug">
                <p>What do you think about our platform? Give us your feedback.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className = "du">
            <p className = "dummy">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div >
          <div className = "butt">
            <button className = "submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback