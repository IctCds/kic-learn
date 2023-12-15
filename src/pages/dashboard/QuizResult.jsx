import React, {useState, useEffect} from "react";
import CircularProgress from "../../components/dashboard/quiz/CircularProgress";
import { LiaStopwatchSolid } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { clearQuizResult } from "../../features/quiz/quizSlice";
import { useAppContext } from "../../context/app/AppContext";
import { useAuthContext } from "../../context/auth/AuthContext";
import Loader from "../../components/utilities/Loader";
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const [selectOption, setSelectOption] = useState(0);
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");
  const [page, setPage] = useState(1);
  const { quizResults, subject, userHasResult } = useSelector((state)=> state.quiz)
  const { failedQuestions, result } = quizResults;
  const { score, timeTaken } = result || {score:0, timeTaken:""}
  let {user} = useAuthContext();
  let {userLoggedIn, isLoading, userProfile} = useAppContext();
  let {userExam} = userProfile;
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let pageNumbers = []

  let questions = failedQuestions || []

  questions.forEach((item)=>{
    pageNumbers.push(item.pageNumber)
  })

  let minute = timeTaken ? timeTaken.split(":")[1] : "00";
  let seconds = timeTaken ? timeTaken.split(":")[2] : "00";
  let quizScore = score ? score : 0

  const handleClick = (value)=>{
    let question = failedQuestions.find((item)=> item.pageNumber === value)
    setQuestion(question.question);
    setOption(question.correctOption);
    setPage(value);
  }

  const customRedirect = () =>{
    if (!userHasResult){
      navigate('/dashboard')
    }
  }

  const takeQuiz = ()=>{
    navigate(`/dashboard/quiz/${user.user_id}/${userExam}`)
    dispatch(clearQuizResult())
  }

  useEffect(()=>{
    userLoggedIn(user)
    setTimeout(()=>{
      if (pageNumbers.length > 0){
        handleClick(pageNumbers[0])
      }
      customRedirect()
    }, 1200)
  },[])

  return (
    <section>
    {isLoading || !userHasResult || !score ? (
      <Loader/> 
    ) : (
      <div className="">
      <p className="text-[#4D4950] text-[11px] my-5 font-bold mx-6">
        YOUR SCORE
      </p>
      <div className="mx-6">
        <h3 className="text-[#4D4950] mb-1 font-bold">
          {quizScore > 6 ? "Hurray! You did great!" : "You can do better!"}
        </h3>
        <p className="text-[#817A86] text-sm">
          You got a {score} out of 10 marks on your {subject} quiz. You
          finished in {minute} minutes {seconds} seconds. Welldone!
        </p>
      </div>
      <div className="rounded-lg grid grid-cols-5 mt-3 mb-6 overflow-hidden border-[1px] border-[#CFFCED] mx-6">
        <div className="col-span-2 flex items-center justify-center bg-[#E6FEF6]">
          <CircularProgress label="Your score" score={score} variant={true} />
        </div>
        <div className="col-span-3 flex flex-col items-start justify-center pl-5 gap-2 bg-[#CFFCED] py-3">
          <p className="font-medium text-[#11553E]">{subject}</p>
          {/* <p className="text-[#11553E]">Algebra equations & word problems</p> */}
          <div className="flex items-center bg-white rounded">
            <div className="bg-[#2BD49C] p-2 rounded">
              <LiaStopwatchSolid className="text-white" />
            </div>
            <p className="px-2 py-1 font-medium text-[#11553E] text-xs">
              {minute} min {seconds}s
            </p>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <h3 className="text-[#4D4950] mb-1 font-bold">Check for answer</h3>
        <p className="text-[#817A86] text-sm">
          You will find the solution to all your questions here.
        </p>
      </div>
      {pageNumbers.length > 0 && (
        <div className="mt-4 mx-6">
        <p>You failed {pageNumbers.length} question</p>
        <div className="mb-5 mt-1 flex">
          <div className="border rounded-md overflow-hidden">
            {pageNumbers.map((item, index) => {
              return (
                <button
                  key={item}
                  className={`text-xs font-medium h-full border-[1px] px-4 py-2 border-[#E6E2E9] bg-[#F5E6FE] ${
                    selectOption === index
                      ? "bg-[#7623A9] text-white"
                      : "text-[#7623A9]"
                  }`}
                  onClick={() => {setSelectOption(index); handleClick(item)}}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      )}
      {pageNumbers.length > 0 && (
        <div className="p-5 bg-[#F3F0F4] mb-4">
        <span className="border-[1px] rounded h-8 w-8 flex justify-center items-center bg-white border-[#E6E2E9] my-3">
          {page}
        </span>
        <p className="text-lg font-medium text-[#4D4950]">
          {question}
        </p>
        <button
          className={`flex rounded-lg border-[1px] bg-[#F5E6FE] border-[#EBCFFC]  items-center gap-3 w-full my-3 p-2`}
        >
          <div className="flex gap-2">
            <div
              className={`w-6 h-6 rounded-full bg-[#942BD4] border-white border-[1px] `}
            ></div>
            <span className="text-[#4d4950]">A</span>
          </div>
          <div className="h-6 border-[1px] border-[#E6E2E9] bg-[#E6E2E9]"></div>
          <div className="text-sm text-[#4d4950]">
            <p>{option}</p>
          </div>
        </button>
      </div>
      )}
      {/* <div className="text-[#4D4950] mx-6">
        <h3 className="text-[#4D4950] mb-1 font-bold">Further learning</h3>
        <p>To learn more on algebra, visit the resources below.</p>
        <ol className="my-3 ml-4">
          <li
            className="underline font-semibold text-sm"
            style={{ listStyleType: "disc" }}
          >
            {" "}
            Watch this Youtube Video on Algebra
          </li>
          <li className="text-sm" style={{ listStyleType: "disc" }}>
            Read "New General Mathematics" by Authors, page 34
          </li>
        </ol>
      </div> */}
      <div className="mx-6">
        <button className="text-[#FAF9FB] bg-[#942BD4] w-full text-sm font-medium rounded-lg h-12 px-6 my-3 "
        onClick={()=> takeQuiz()}
        >
          Take another quiz
        </button>
      </div>
    </div>
    )}
    </section>
  );
};

export default QuizResult;
