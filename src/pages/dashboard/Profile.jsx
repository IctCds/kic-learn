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
import Modal from '../../components/dashboard/profile/modal/Modal';
import { toast } from 'react-toastify';


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

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

const Profile = () => {
  const [showLocation, setShowLocation] = useState(()=>localStorage.getItem('location')? false : true);
  const [showExam, setShowExam] = useState(()=>localStorage.getItem('exam')? false : true);
  const [selectedExam, setSelectedExam] = useState(null)
  const [preview, setPreview] = useState(null)
  const [ openDialog, setOpenDialog ] = useState(false);
  const [ openUpload, setOpenUpload ] = useState(false);
  const [ openPassword, setOpenPassword ] = useState(false);
  const [ load, setLoad ] = useState(true);
  const [ exams, setExams] = useState([]);
  const [ classes, setClasses ] = useState([]);
  const [ updateClass, setUpdateClass ] = useState(null);
  const [ updateExam, setUpdateExam ] = useState(null);
  const [ updateImage, setUpdateImage ] = useState(null);
  const [ reload, setReload ] = useState(null);

  let {user} = useAuthContext()
  let {userLoggedIn, isLoading, userProfile} = useAppContext();

  let firstName = userProfile.userName ? userProfile.userName.split(" ")[0]: profileData.firstName
  let lastName = userProfile.userName ? userProfile.userName.split(" ")[1] : profileData.lastName
  let id = userProfile.user ? userProfile.user.split("-")[0]: profileData.id
  let {userExam, userEmail, user_pic} = userProfile;

  const baseURL = 'http://ictcds.pythonanywhere.com/api/';


  const handleExamClick = (exam, id) => {
    if (exam !== userExam){
      setSelectedExam({name:exam, id:id});
      setOpenDialog(true);
    }
  };

  const handlePreview = (pic) => {
    setPreview(pic);
    setOpenUpload(true)
  }

  // Get All Exam Types
  const getExams = async()=>{
    let response = await fetch(`${baseURL}learn/exams/`, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });

    let data = await response.json()

    if (response.status === 200){
      setExams(data);
    } else {
      console.log(response.statusText)
    }
  };

  // Get All Class Type
  const getClasses = async()=>{
    let response = await fetch(`${baseURL}learn/classes/`, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });

    let data = await response.json()

    if (response.status === 200){
      setClasses(data);
    } else {
      console.log(response.statusText)
    }
  };

  const editClass = async()=>{
    let formData = new FormData();
    formData.append('user', userProfile.user);
    formData.append('student_class', updateClass.id)

    let response = await fetch(`${baseURL}accounts/edit-user/${userProfile.user}`, {
      method: 'PATCH',
      body:formData
    });
    let data = await response.json()

    if (response.status === 200){
      toast.success(`Class changed to ${updateClass.name}!!`, toastPosition);
      setReload(updateClass.id);
      console.log(data);
    } else {
      toast.error('Oops!! Something went wrong')
      console.log(response.statusText)
    }
  };

  const editExam = async()=>{
    let formData = new FormData();
    formData.append('user', userProfile.user);
    formData.append('exam', updateExam.id)

    let response = await fetch(`${baseURL}accounts/edit-user/${userProfile.user}`, {
      method: 'PATCH',
      body:formData
    });
    let data = await response.json()

    if (response.status === 200){
      toast.success(`Exam changed to ${updateExam.name}!!`, toastPosition);
      setReload(updateExam.id);
      console.log(data);
    } else {
      toast.error('Oops!! Something went wrong')
      console.log(response.statusText)
    }
  };

  const editImage = async()=>{
    let formData = new FormData();
    formData.append('user', userProfile.user);
    formData.append('profile_pic', updateImage)

    let response = await fetch(`${baseURL}accounts/edit-user/${userProfile.user}`, {
      method: 'PATCH',
      body:formData
    });
    let data = await response.json()

    if (response.status === 200){
      toast.success(`Profile picture updated!!`, toastPosition);
      setReload(updateImage);
      console.log(data);
    } else {
      toast.error('Oops!! Something went wrong')
      console.log(response.statusText)
    }
  };

  useEffect(()=>{
    if(updateClass){
      editClass();
    }
  }, [updateClass])

  useEffect(()=>{
    if(updateExam){
      editExam();
    }
  }, [updateExam])
  
  useEffect(()=>{
    if(updateImage){
      editImage();
    }
  }, [updateImage])

  useEffect(()=>{
    userLoggedIn(user);
    getExams();
    getClasses();
    setTimeout(()=>{
      setLoad(false);
    }, 1500)
  }, [reload])

  return (
    <section>
    {isLoading || load || !userProfile.user ? 
      (
        <Loader/>
      )
      : 
      (
        <section className = "e-learning-profile pt-12">

        <Modal 
          exam={userExam}
          newExam={selectedExam}
          dialog={openDialog}
          openDialog={setOpenDialog}
          password={openPassword}
          openPassword={setOpenPassword}
          upload={openUpload}
          openUpload={setOpenUpload}
          userImage={preview}
          updateImage={setUpdateImage}
          updateExam={setUpdateExam}
          />

          <ProfileDetails 
            firstName={firstName}
            lastName={lastName}
            id={id}
            user_pic={user_pic}
            pic={pic}
            userExam={userExam}
            showExam={showExam}
            showLocation={showLocation}
            location={profileData.location}
            upload={handlePreview}
          />

          <div className = "benefits">
            <ShowDetails
              firstName={firstName}
              lastName={lastName}
              location={profileData.location}
            />

            <UpdateDetails
              userEmail={userEmail}
              userExam={userExam}
              profileData={profileData}
              handleClick={handleExamClick}
              openPassword={setOpenPassword}
              exams={exams}
              classes={classes}
              updateClass={setUpdateClass}
            />
              
            <Performance profile={userProfile}/>

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
            location={setShowLocation}
            exam={setShowExam}
            showExam={showExam}
            showLocation={showLocation}
            userLocation={profileData.location}
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