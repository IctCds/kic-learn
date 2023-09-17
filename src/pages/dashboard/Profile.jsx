import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Pagination from "../../components/dashboard/quiz/Pagination";


import '../../utils/profile.css'

import pic from '../../img/profile/pic.png';
import editIcon from '../../svg/Profile/edit.svg';
import eyeIcon from '../../svg/Profile/eye.svg';
import vector3 from '../../svg/Profile/Vector 3.svg';
import Darrow from "../../svg/Profile/down arrow.svg";
import toggle from "../../svg/Profile/Toggle.svg";
import toggle1 from "../../svg/Profile/Toggle1.svg";
import star1 from "../../svg/Profile/Star 1.svg";
import star2 from "../../svg/Profile/Star 2.svg";




// Sample profile data
const profileData = {
  firstName: 'First Name',
  lastName: 'L.',
  id: '12345678AB',
  location: 'Kosofe LGA, Lagos, Nigeria',
  email: 'studentemail@gmail.com',
  password: '********',
  schoolClass: 'SS3',
  exam: ['JSSCE', 'SSCE', 'JAMB']
};

const percentage = 90;

const Profile = () => {
  const [showLocation, setShowLocation] = useState(true);
  const [showExamType, setShowExamType] = useState(true);
  const [selectedExam, setSelectedExam] = useState(profileData.exam[2]);

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };


  return (
    <div className = "e-learning-profile">

      <section>

      </section>

      <div className = "frame-2">
        <div className = "frame-3">
          <div className = "text-wrapper-8">PROFILE</div>
        </div>
        <div className = "HERO">
          <div className = "credentials">
            <div className = "text-wrapper-9">{profileData.firstName} {profileData.lastName}</div>
            <div className = "text-wrapper-10">ID: {profileData.id}</div>
            <div className = "text-wrapper-10">{profileData.exam[2]}</div>
            <div className = "text-wrapper-10">{showLocation && <div>Location: {profileData.location}</div>}</div>
          </div>
          <img className = "profile-instance" alt = "Edit or upload pics" src = {pic} />
        </div>
      </div>

      <div className = "benefits">
        <div className = "card-2">
          <div className = "entry">
            <div className = "name-2">
              <div className = "text-wrapper-11">Full Name</div>
              <div className = "text-wrapper-12">{profileData.firstName} {profileData.lastName}</div>
            </div>
          </div>
          <div className = "entry">
            <div className = "name-2">
              <div className = "text-wrapper-11">Location</div>
              <div className = "text-wrapper-12">{showLocation && profileData.location}</div>
            </div>
          </div>
        </div>

        <div className = "card-3">
          <div className = "entry-2">
            <div className = "name-2">
              <div className = "text-wrapper-11">email</div>
              <div className = "text-wrapper-12">{profileData.email}</div>
            </div>
          </div>
          
          <div className = "name-wrapper">
            <div className = "name-2">
              <div className = "text-wrapper-11">Password</div>
              <div>
                <input type = "password" value = {profileData.password} disabled className = 'passtyle'/>
                <div className = "buttons" >
                  <img className = "edit" alt = "Edit" src = {editIcon} />
                  <img className = "vector" alt = "Vector" src = {vector3} />
                  <img className = "edit" alt = "Edit" src = {eyeIcon} />
                </div>
              </div>
            </div>
          </div>
            <div className = "frame-4">
              <div className = "text-wrapper-11">Class</div>
              <div className = "passtyle">{profileData.schoolClass}</div>
              <div className = "buttons">
              <img className = "darrow" alt = "Edit" src = {Darrow} />
              </div>
            </div>
            <div className = "frame-5">
              <div className = "text-wrapper-11">Exam type</div>
              <div className = "exam-type">
                <div className = "ex"> JSSCE</div>
                <div className = "ex"> SSSCE</div>
                <div className = "ex-sel"> JAMB</div>
                {/* {profileData.exam.map((exam, index) => (
                <a
                key = {index}
                href = {`#${exam}`}
                className = {`exam-link ${selectedExam === exam ? 'selected' : ''}`}
                onClick={() => handleExamClick(exam)}
              >
                {exam}
              </a>
                  ))} */}
              </div>
            </div>
          </div>
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
          <div className = "card-4">
            <div className = "frame-8">
              <div className = "text-wrapper-15">Mathematics</div>
              <div className = "frame-9">
                <div className = "text-wrapper-16">BEST SUBJECT</div>
              </div>
            </div>
            <div className = "stats">
              <div className = "frame-10">
                <div className = "pie-stats">
                  <div className = "" data-progress="90">
                    <CircularProgressbar value = {percentage} text = {"A1 | 90"} 
                          styles = {{
                            root: { width: '78px' },
                            path: {
                              stroke: '#23A97C', // Change this color to green
                              strokeWidth: '6px',
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              transform: 'rotate(60deg)', // Rotate the progressbar anticlockwise
                              transformOrigin: 'center',
                            },
                            trail: { stroke: '#CFFCED' },
                            text: {
                              fill: '#23A97C', // Change this color to green
                              fontSize: '20px',
                              fontWeight: 'bold',
                              fontFamily: 'Inter',
                              fontStyle: 'normal',
                              lineHeight: '24px',
                              letterSpacing: '-0.16px',
                            },
                          }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Highest grade</div>
              </div>
              <div className = "frame-10">
                <div className = "overlap-group-wrapper">
                  <div className = "overlap-group">
                    <CircularProgressbar value = "80" text = {"B2 | 60"} 
                        styles = {{
                          root: { width: '78px' },
                          path: {
                            stroke: '#23A97C', // Change this color to green
                            strokeWidth: '6px',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(80deg)', // Rotate the progressbar anticlockwise
                            transformOrigin: 'center',
                          },
                          trail: { stroke: '#CFFCED' },
                          text: {
                            fill: '#23A97C', // Change this color to green
                            fontSize: '20px',
                            fontWeight: 'bold',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            lineHeight: '24px',
                            letterSpacing: '-0.16px',
                          },
                        }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Average grade</div>
              </div>
            </div>
          </div>
          <div className = "card-5">
            <div className = "frame-8">
              <div className = "text-wrapper-15">English Language</div>
            </div>
            <div className = "stats">
              <div className = "frame-10">
                <div className = "pie-stats-2">
                  <div className = "overlap-group">
                    <CircularProgressbar value = "20" text = {"D7 | 40"} 
                          styles = {{
                            root: { width: '78px' },
                            path: {
                              stroke: '#E54C4C', // Change this color to green
                              strokeWidth: '6px',
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                              transform: 'rotate(280deg)', // Rotate the progressbar anticlockwise
                              transformOrigin: 'center',
                            },
                            trail: { stroke: '#FCCFCF' },
                            text: {
                              fill: '#E54C4C',
                              fontSize: '20px',
                              fontWeight: 'bold',
                              fontFamily: 'Inter',
                              fontStyle: 'normal',
                              lineHeight: '24px',
                              letterSpacing: '-0.16px',
                            },
                          }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Highest grade</div>
              </div>
              <div className = "frame-10">
                <div className = "pie-stats-3">
                  <div className = "overlap-group">
                    <CircularProgressbar value = "20" text = {"D7 | 40"} 
                            styles = {{
                              root: { width: '78px' },
                              path: {
                                stroke: '#E54C4C', // Change this color to green
                                strokeWidth: '6px',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(280deg)', // Rotate the progressbar anticlockwise
                                transformOrigin: 'center',
                              },
                              trail: { stroke: '#FCCFCF' },
                              text: {
                                fill: '#E54C4C',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                lineHeight: '24px',
                                letterSpacing: '-0.16px',
                              },
                            }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Average grade</div>
              </div>
            </div>
          </div>
          <div className = "card-5">
            <div className = "frame-8">
              <div className = "text-wrapper-15">Sub 1</div>
            </div>
            <div className = "stats">
              <div className = "frame-10">
                <div className = "pie-stats-4">
                  <div className = "overlap-group">
                    <CircularProgressbar value = "20" text = {"C4 | 55"} 
                            styles = {{
                              root: { width: '78px' },
                              path: {
                                stroke: '#E5A84C', // Change this color to green
                                strokeWidth: '6px',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(280deg)', // Rotate the progressbar anticlockwise
                                transformOrigin: 'center',
                              },
                              trail: { stroke: '#FCEACF' },
                              text: {
                                fill: '#E5A84C',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                lineHeight: '24px',
                                letterSpacing: '-0.16px',
                              },
                            }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Highest grade</div>
              </div>
              <div className = "frame-10">
                <div className = "pie-stats-5">
                  <div className = "overlap-group">
                    <CircularProgressbar value = "20" text = {"C4 | 45"} 
                              styles = {{
                                root: { width: '78px' },
                                path: {
                                  stroke: '#E5A84C', // Change this color to green
                                  strokeWidth: '6px',
                                  transition: 'stroke-dashoffset 0.5s ease 0s',
                                  transform: 'rotate(280deg)', // Rotate the progressbar anticlockwise
                                  transformOrigin: 'center',
                                },
                                trail: { stroke: '#FCEACF' },
                                text: {
                                  fill: '#E5A84C',
                                  fontSize: '20px',
                                  fontWeight: 'bold',
                                  fontFamily: 'Inter',
                                  fontStyle: 'normal',
                                  lineHeight: '24px',
                                  letterSpacing: '-0.16px',
                                },
                              }}/>
                  </div>
                </div>
                <div className = "text-wrapper-18">Average grade</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Pagination page = {3} />
        </div>
      
      </div>

      </div>
      <div className = "description-2">
        <div className = "frame">
          <div className = "text-wrapper-22">Privacy settings</div>
        </div>
        <div className = "div-wrapper">
          <p className = "div">Manage your privacy settings, choose what information is visible to others.</p>
        </div>
      </div>
      <div className = "HERO-2">
        <div className = "credentials">
          <div className = "text-wrapper-9">{profileData.firstName} {profileData.lastName}</div>
          <div className = "text-wrapper-10">ID: {profileData.id}</div>
          <div className = "text-wrapper-10">{profileData.exam[2]}</div>
        </div>
        <img className = "profile-instance1" alt = "Edit or upload pics" src = {pic} />
      </div>
      <div className = "frame-14">
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Location</div>
            <img className = "toggle" alt = "Edit" src = {toggle} />
          </div>
        </div>
        <div className = "div-3">
          <div className = "div-wrapper">
            <div className = "text-wrapper-23">Show Exam Type</div>
            <img className = "toggle" alt = "Edit" src = {toggle1} />
          </div>
        </div>
      </div>

      <div className = "frame-14">
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
      <div>

      </div>
    </div>
  );
};


export default Profile