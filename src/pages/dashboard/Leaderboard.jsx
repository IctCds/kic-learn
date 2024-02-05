import React, {useEffect, useState} from 'react'
import { useAuthContext } from '../../context/auth/AuthContext';
import { useAppContext } from '../../context/app/AppContext';
import Loader from '../../components/utilities/Loader';
import UserInfo from '../../components/dashboard/leaderboard/UserInfo';
import UsersLog from '../../components/dashboard/leaderboard/UserLog';
import DropDown from '../../components/dashboard/leaderboard/DropDown';
import '../../components/dashboard/profile/profile.css'
import dummyImage from "../../img/profile/anon.png";

const dummySubject = [
  {
    subject: "All Subjects",
    label: "All"
  },
  {
    subject: "Mathematics",
    label: "Mathematics"
  },
  {
    subject: "English",
    label: "English"
  },
];

const Leaderboard = () => {
  let {user} = useAuthContext();
  let {userLoggedIn, isLoading, userProfile} = useAppContext();
  const [ filter, setFilter ] = useState("All")
  const [ ranking, setRanking ] = useState([]);
  const [ load, setLoad ] = useState(true)
  const [ info, setInfo ] = useState({position: "", highestScore: "", highestScoreSub: "", currentScore: "", increase: ""});
  let firstName = userProfile.userName ? userProfile.userName.split(" ")[0]: "First Name"
  let lastName = userProfile.userName ? userProfile.userName.split(" ")[1] : "L."
  let id = userProfile.user ? userProfile.user.split("-")[0]: "12345678AB"
  let {user_pic, userExam} = userProfile;

  let baseURL = 'https://ictcds.pythonanywhere.com/api/learn'

  const getRanking = async()=>{
    let response = await fetch(`${baseURL}/leaderboard/${filter}/`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });

    let data = await response.json();

    if (response.status === 200){
      setRanking(data.standings);
    } else {
      console.log(data.message);
    }
  }

  const getUserInfo = async()=>{
    let response = await fetch(`${baseURL}/rank-data/${user.user_id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });

    let data = await response.json();

    if (response.status === 200){
      setInfo(data.userData);
    } else {
      console.log(data.message);
    }
  }

  useEffect(()=>{
    userLoggedIn(user);
    getUserInfo();
    setTimeout(()=>{
      setLoad(false);
    }, 1500);
  }, [])

  useEffect(()=>{
    getRanking();
  }, [filter])

  return (
    <section>
      {
        isLoading || load ? 
        (
          <Loader/>     
        )
        :
        (
          <div className='mx-6'>
        <p className="text-[#4D4950] text-[11px] my-5 font-bold">LEADERBOARD</p>

        {/*User Profile Card */}

        <div className="p-4 border-[1px] border-[#E6E2E9] rounded-lg h-[112px] flex gap-4 items-center mb-8">
          <div className="border-[1px] h-[100px] w-[110px] feat rounded-lg border-[#E6E2E9] overflow-hidden">
            <img className="rounded-lg" src={user_pic? user_pic : dummyImage} alt="student" />
          </div>
          <div>
            <p className="font-bold text-[#942BD4]">{firstName} {lastName[0]}.</p>
            <p className="text-xs font-normal text-[#817A86]">
              ID: {id}
            </p>
            <p className="text-xs font-normal text-[#817A86]">{userExam}</p>
          </div>
        </div>
        <UserInfo {...info}/>
        <div className='my-6'>
          <DropDown labelText="Choose a Subject" options={dummySubject} filter={setFilter}/>
        </div>
        {ranking.map((item, index) =>{
          return (
            <UsersLog key={index}
              {...item}
            />
          )
        })}
      </div>
        )
      }
    </section>
  )
}

export default Leaderboard