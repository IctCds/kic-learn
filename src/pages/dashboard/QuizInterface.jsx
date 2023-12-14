import React, {useState, useEffect} from "react";
import Modal from "../../components/dashboard/quizInterface/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from "../../context/auth/AuthContext";
import { useAppContext } from "../../context/app/AppContext";
import { getQuestions, selectAnswer, getSelectedAnswer, getQuizResults } from '../../features/quiz/quizSlice';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "../../components/utilities/Loader";


// const quizNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dummyOption = ['A', 'B', 'C', 'D'];
const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

const QuizInterface = () => {
  const {quizNumbers, questions, subject, selectedAnswer, quizData, timeTaken} = useSelector((state) => state.quiz); 
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  let { user } = useAuthContext();
  let { userLoggedIn, userProfile, isLoading} = useAppContext();
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let {userExam} = userProfile
  let dummyData = {id:1, question:"", options:[]}

  let { next, results } = questions;
  let result = results? results : []
  let { id, question, options} = result.length > 0 ? result[0] : dummyData ;

  let questionsLeft = 10 - quizData.length

  let firstName = userProfile.userName ? userProfile.userName.split(" ")[0]: "First Name";

  let url = `https://ictcds.pythonanywhere.com/api/learn/questions/${userExam}/${subject}/`;
  const baseURL = "https://ictcds.pythonanywhere.com/api/learn/solve/"

  const switchPage = (page) =>{
    dispatch(getQuestions(`${url}?page=${page}`))
  }

  const customRedirect = ()=>{
    if (userExam === "JSSCE"){
      navigate(`/dashboard/quiz/${user.user_id}/${userExam}`)
      toast.warning('Questions are unavailable!', toastPosition)
    }
  }

  const submitQuiz = async()=>{
    let response = await fetch(baseURL, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "data": quizData,
        "result":{
          "user": user.user_id,
          "time_taken": timeTaken,
          "subject": subject,
          "exam": userExam,
          "test": "Quiz"
        }
      })
    });
    let data = await response.json()

    if(response.status === 201){
      dispatch(getQuizResults(data))
      toast.success("Quiz has been submitted", toastPosition)
      navigate("/dashboard/result")
    } else {
      toast.error("Something went wrong", toastPosition)
      console.log(response.statusText)
    }
  }

  useEffect(()=>{
    if(questions.count){
      dispatch(getSelectedAnswer(id));
    }
  }, [questions])


  useEffect(()=>{
    userLoggedIn(user);
    customRedirect();
  }, [])

  return (
    <section>
      {isLoading ? (
        <Loader/>
      ) : (
        <div className="relative">
      <div className="mx-5">
        <p className="text-[#4D4950] text-[11px] my-5 font-bold">TAKE A QUIZ</p>
        <div>
          <h3 className="text-[#4D4950] mb-1 font-bold">Instructions</h3>
          <p className="text-[#817A86] text-sm">
            Hi {firstName}, you are taking a {subject} quiz. Remember to attempt all, you will do well.
            <br />
            <br /> If you can’t do all, no worries, you can still submit after
            answering at least 7 questions. <br />
            <br />
            Goodluck!
          </p>
          <button className="text-[#FAF9FB] bg-[#942BD4] w-full text-sm font-medium rounded-lg h-12 px-6 my-3">
            Start your Quiz
          </button>
        </div>
      </div>

      <div className="h-12 bg-[#F7A1A1] flex justify-center items-center text-lg font-medium my-6">
        15 : 00
      </div>

      <div className="mx-5">
        <div className="flex justify-between text-[#4D4950] text-xs font-medium mb-2">
          <span className="">Keep going!</span>
          <span className="">{questionsLeft} questions left</span>
        </div>
        <div className="h-8 grid grid-cols-10 rounded overflow-hidden mb-2">
          {quizNumbers.map((item) => {
            return (
              <button
                key={item.num}
                className={`text-xs font-medium h-full min-w-[32px] border-[1px] ${item.answered ? "bg-[#942BDA] text-white" : "border-[#E6E2E9]"}`}
              >
                {item.num}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 bg-[#F3F0F4] mb-4">
        <span className="border-[1px] rounded h-8 w-8 flex justify-center items-center bg-white border-[#E6E2E9] my-3">
          {currentPage < 10 ? `0${currentPage}`: `${currentPage}` }
        </span>
        <p className="text-lg font-medium">
          {question}
        </p>
        <div>
          {options.map((item, index) => {
            const selectedOption = item.id === selectedAnswer;
            return (
              <button
                key={item.id}
                className={`flex rounded-lg border-[1px] ${
                  selectedOption
                    ? "bg-[#F5E6FE] border-[#EBCFFC]"
                    : "border-[#E6E2E9] bg-white"
                }  items-center gap-3 w-full my-3 p-2`}
                onClick={() => dispatch(selectAnswer({numID: currentPage, questionID:id, optionID:item.id}))}
              >
                <div className="flex gap-2">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      selectedOption
                        ? "bg-[#942BD4] border-white"
                        : "bg-[#E6E2E9] border-[#CDC7D1]"
                    }  border-[1px] `}
                  ></div>
                  <span className="text-[#4d4950]">{dummyOption[index]}</span>
                </div>
                <div className="h-6 border-[1px] border-[#E6E2E9] bg-[#E6E2E9]"></div>
                <div className="text-sm text-[#4d4950]">
                  <p>{item.option}</p>
                </div>
              </button>
            );
          })}
        </div>

      { currentPage === 10 ?
        (
        <button
          className={`rounded-lg h-12 px-6  text-sm  mb-2 w-full ${
            true
              ? "bg-[#942BDA] text-white"
              : "bg-[#E6E2E9] text-[#B4ABBA]"
          }`}
          onClick={()=>{submitQuiz()}}
        >
          Submit Quiz
        </button>
      )
      :
      (
        <button
            className={`rounded-lg h-12 px-6  text-sm  mb-2 w-full ${
              selectedAnswer
                ? "bg-[#942BDA] text-white"
                : "bg-[#E6E2E9] text-[#B4ABBA]"
            }`}
            onClick={()=> {dispatch(getQuestions(next)); setCurrentPage(currentPage + 1)}}
          >
            Next question
        </button>
      )
      }

        <div className="flex justify-center">
          <button className="text-sm font-medium text-[#942BDA] border-b-2 border-[#942bda]">
            Skip question
          </button>
        </div>
      </div>

      <div className="mx-5">
        <div className="flex justify-between text-[#4D4950] text-xs font-medium mb-2">
          <span className="">Keep going!</span>
          <span className="">{questionsLeft} questions left</span>
        </div>
        <div className="h-8 grid grid-cols-10 rounded overflow-hidden mb-2">
          {quizNumbers.map((item) => {
            return (
              <button
                key={item.num}
                className={`text-xs font-medium h-full min-w-[32px] border-[1px] ${item.answered ? "bg-[#942BDA] text-white" : "border-[#E6E2E9]"}`}
                onClick={()=> {setCurrentPage(item.num); switchPage(item.num)}}
              >
                {item.num < 10 ? "0" : ""}
                {item.num}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mx-5">
        <button
          className="text-[#FAF9FB] bg-[#D42B2B] w-full text-sm font-medium rounded-lg h-12 px-6 my-3"
          onClick={() => setOpenCancelModal(true)}
        >
          Cancel Quiz
        </button>
      </div>

      {/* MODAL */}
      <Modal
        open={openCancelModal}
        close={setOpenCancelModal}
        displayButton={true}
        underlineText="Are you sure you want to cancel your quiz?"
        otherText=" No problem, you can always retake it."
      />
    </div>
      )}
    </section>
  );
};

export default QuizInterface;
