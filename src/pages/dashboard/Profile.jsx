import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/app/AppContext';
import { useAuthContext } from '../../context/auth/AuthContext';
import Loader from '../../components/utilities/Loader';
import ProfileDetails from '../../components/dashboard/profile/ProfileDetails';
import ShowDetails from '../../components/dashboard/profile/ShowDetails';
import UpdateDetails from '../../components/dashboard/profile/UpdateDetails';
import Performance from '../../components/dashboard/profile/Performance';
import Privacy from '../../components/dashboard/profile/Privacy';
import Feedback from '../../components/dashboard/profile/Feedback';



import '../../components/dashboard/profile/profile.css'

import pic from '../../img/profile/anon.png';
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
  exam: ['JSSCE', 'SSSCE', 'JAMB']
};


const Profile = () => {
  const [showLocation, setShowLocation] = useState(true);
  const [showExamType, setShowExamType] = useState(true);
  const [selectedExam, setSelectedExam] = useState(profileData.exam[2]);
  let {user} = useAuthContext()
  let {userLoggedIn, isLoading, userProfile} = useAppContext();

  let firstName = userProfile.userName ? userProfile.userName.split(" ")[0]: profileData.firstName
  let lastName = userProfile.userName ? userProfile.userName.split(" ")[1] : profileData.lastName
  let id = userProfile.user ? userProfile.user.split("-")[0]: profileData.id
  let {userExam, userEmail, user_pic} = userProfile;

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  useEffect(()=>{
    userLoggedIn(user);
  }, [])

  return (
    <section>
    {isLoading ? 
      (
        <Loader/>
      )
      : 
      (
        <section className = "e-learning-profile pt-12">

          <ProfileDetails 
            firstName={firstName}
            lastName={lastName}
            id={id}
            user_pic={user_pic}
            pic={pic}
            userExam={userExam}
            showLocation={showLocation}
            location={profileData.location}
          />

          <div className = "benefits">
            <ShowDetails
              firstName={firstName}
              lastName={lastName}
              location={profileData.location}
              showLocation={showLocation}
            />

            <UpdateDetails
              userEmail={userEmail}
              userExam={userExam}
              profileData={profileData}
            />
              
            <Performance/>

          </div>
            
          <Privacy
            firstName={firstName}
            lastName={lastName}
            userExam={userExam}
            user_pic={user_pic}
            pic={pic}
            id={id}
            toggle={toggle}
            toggle1={toggle1}
          />

          <Feedback
            star1={star1}
            star2={star2}
          />

            </section>
      )
      }
    </section>
  );
};


export default Profile