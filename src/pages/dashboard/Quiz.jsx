import React, { useEffect, useState } from "react";
import dummyImage from "../../img/profile/anon.png";
import { BsQuestionCircle } from "react-icons/bs";
import { PiTimer } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import FormSelect from "../../components/dashboard/quiz/FormSelect";
import Pagination from "../../components/dashboard/quiz/Pagination";
import TestSubjectCard from "../../components/dashboard/quiz/TestSubjectCard";
import TestScoreCard from "../../components/dashboard/quiz/TestScoreCard";
import { useAuthContext } from "../../context/auth/AuthContext";
import { useAppContext } from "../../context/app/AppContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, startSession } from '../../features/quiz/quizSlice'
import Loader from "../../components/utilities/Loader";
import '../../components/dashboard/profile/profile.css';
import Feedback from "../../components/dashboard/profile/Feedback";

const dummySubject = [
  "Mathematics",
  "English",
];

const dummyTopics = [
  "Algebra",
  "Calculus",
  "Trigonometry",
  "Cirle Geometry",
  "Bearing and Distance",
  "Quadratic",
];

const dummyTopicScores = [
  {
    topic: "Algebra",
    score: 90,
  },
  {
    topic: "Trigonometry",
    score: 50,
  },
  {
    topic: "Calculus",
    score: 20,
  },
  {
    topic: "Circle  Geometry",
    score: 90,
  },
  {
    topic: "Bearing and Distance",
    score: 40,
  },
];

const dummyFilterSubject = [{option: "ALL", value:"All"}, {option: "MATHS", value: "Mathematics"}, {option: "ENG", value: "English"}]
const dummyTestScoreCard = [
  {
    subject: "Mathematics",
    subjectScore: 5,
    topicsCovered: 8,
    topicsScores: dummyTopicScores,
  },
];
const Quiz = () => {
  const [filter, setFilter] = useState("All");
  const [testHistory, setTestHistory] = useState([])
  const [load, setLoad] = useState(true)
  let { user } = useAuthContext();
  let { userLoggedIn, isLoading, userProfile } = useAppContext();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {subject} = useSelector((state)=> state.quiz)

  let firstName = userProfile.userName ? userProfile.userName.split(" ")[0]: "First Name"
  let lastName = userProfile.userName ? userProfile.userName.split(" ")[1] : "L."
  let id = userProfile.user ? userProfile.user.split("-")[0]: "12345678AB"
  let {user_pic, userExam} = userProfile;


  let url = `https://ictcds.pythonanywhere.com/api/learn/questions/${userExam}/${subject}/`

  let baseURL = `https://ictcds.pythonanywhere.com/api/learn/user-performance/${user.user_id}/1/${filter}/`


  const startQuiz = () =>{
    dispatch(startSession());
    dispatch(getQuestions(url));
    navigate('/dashboard/quiz-interface');
  }

  const getHistory = async()=>{
    let response = await fetch(baseURL, {
      method: 'GET',
      headers:{'Content-Type': 'application/json'}
    });

    let data = await response.json()

    if (response.status === 200){
      setTestHistory(data.history)
    } else {
      console.log(data.message)
    }
  }

  useEffect(() => {
    userLoggedIn(user);
    setTimeout(()=>{
      setLoad(false);
    }, 1500)
  }, []);

  useEffect(() =>{
    getHistory();
  }, [filter])

  return (
    <section>
      {isLoading || load || !userProfile.user ? (
        <Loader/>
      ) : (
        <div className="mx-6">
          <p className="text-[#4D4950] text-[11px] my-5 font-bold">QUIZ</p>

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

          <form className="pb-12">
            <FormSelect labelText="Choose a Subject" options={dummySubject} />
            {/* <FormSelect labelText="Select a Topic" options={dummyTopics} /> */}
            <div className="flex justify-between items-center mb-8 mt-5 bg-[#F3F0F4] border-[1px] border-[#E6E2E9] rounded-lg h-10 px-3 text-xs font-bold leading-5 text-[#343036] w-full ">
              <div className="flex gap-1 items-center text-[#343036] ">
                <PiTimer className="text-[#817A86] text-xl" /> 15 Mins
              </div>
              <div className="flex gap-2 items-center text-[#343036] ">
                <BsQuestionCircle className="text-[#817A86] text-xl" /> 10
                Questions
              </div>
              <div className="flex gap-2 items-center text-[#343036] ">
                <IoMdCheckmark className="text-[#817A86] text-xl" /> 10 Marks
              </div>
            </div>
              <button className="text-[#FAF9FB] bg-[#942BD4] w-full text-sm font-medium rounded-lg h-12 px-6 "
                onClick={()=> startQuiz()}
                >
                Start your quiz
              </button>
          </form>
          {/* <div className="mb-4">
            <p className="text-[#4D4950] mb-1 font-medium">Performance</p>
            <p className="text-[#817A86] text-sm">
              View your scores in all the test topics you have taken in all
              subjects.
            </p>
          </div> */}
          {/* <p className="text-[#4D4950] font-bold mb-3 text-[11px]">
            TEST SCORES
          </p> */}

          {/* {dummyTestScoreCard?.map((item, index) => {
            return (
              <TestScoreCard
                key={`${item.subject}-${index}-${item.topicsCovered}`}
                {...item}
                pagination={3}
              />
            );
          })} */}

          {/* ACTIVITIES */}
          <div className="mt-4 mb-2">
            <p className="text-[#4D4950] mb-1 font-medium">Activities</p>
            <p className="text-[#817A86] text-sm">
              See what you past test activities and scores have been.
            </p>
          </div>

          {/* TEST HISTORY */}
          <p className="text-[#4D4950] font-bold mb-2 mt-3 text-[11px]">
            TEST HISTORY
          </p>
          <div className="h-10 bg-[#E6E2E9] rounded-lg flex gap-[10px] items-center px-[2px] mb-3">
            {dummyFilterSubject.map((data, index) => {
              return (
                <button
                  key={`${data.option}-${index}`}
                  onClick={() => setFilter(data.value)}
                  className={`${
                    data.value === filter ? "bg-white" : ""
                  } text-[#817A86]  h-[36px] rounded-[7px] px-3 text-[11px] font-bold`}
                >
                  {data.option}
                </button>
              );
            })}
          </div>
          <div>
            {testHistory.map((history, index) => {
              return (
                <TestSubjectCard
                  key={`${history.subject}-${index}`}
                  {...history}
                />
              );
            })}
          </div>

          {/* PAGINATION AFTER TEST HISTORY */}
          <div className="flex justify-start mt-3">
            <Pagination page={4} />
          </div>

          {/* FEEDBACK */}
          <p className="text-[#4D4950] font-bold mb-3 mt-6 text-[11px]">
            FEEDBACK
          </p>
          <Feedback/>
        </div>
      )}
    </section>
  );
};

export default Quiz;
