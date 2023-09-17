import React from "react";
import { BiStopwatch } from "react-icons/bi";
import Modal from "../../components/dashboard/quizInterface/Modal";
import { Link } from "react-router-dom";

const quizNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dummyOption = [
  {
    option: "A",
    optionText: "Answer A",
  },
  {
    option: "B",
    optionText: "Answer B",
  },
  {
    option: "C",
    optionText: "Answer C",
  },
  {
    option: "D",
    optionText: "Answer D",
  },
];

const QuizInterface = () => {
  const [openCancelModal, setOpenCancelModal] = React.useState(false);
  const [selectAnswer, setSelectAnswer] = React.useState("");
  return (
    <div className="relative">
      <div className="mx-5">
        <p className="text-[#4D4950] text-[11px] my-5 font-bold">TAKE A QUIZ</p>
        <div>
          <h3 className="text-[#4D4950] mb-1 font-bold">Instructions</h3>
          <p className="text-[#817A86] text-sm">
            Hi Firstname, you are taking a Maths [Subjectname] quiz in Algebra
            [Topic]. Remember to attempt all, you will do well.
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
          <span className="">5 questions left</span>
        </div>
        <div className="h-8 grid grid-cols-10 rounded overflow-hidden mb-2">
          {quizNumbers.map((num) => {
            return (
              <button
                key={num}
                className="text-xs font-medium h-full border-[1px] border-[#E6E2E9]"
              >
                {num}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-5 bg-[#F3F0F4] mb-4">
        <span className="border-[1px] rounded h-8 w-8 flex justify-center items-center bg-white border-[#E6E2E9] my-3">
          01
        </span>
        <p className="text-lg font-medium">
          Which of the following is most advanced in the evolutionary trend of
          animals?
        </p>
        <div>
          {dummyOption.map((item) => {
            const { option, optionValue } = item;
            const selectedOption = option === selectAnswer;
            return (
              <button
                key={option}
                className={`flex rounded-lg border-[1px] ${
                  selectedOption
                    ? "bg-[#F5E6FE] border-[#EBCFFC]"
                    : "border-[#E6E2E9] bg-white"
                }  items-center gap-3 w-full my-3 p-2`}
                onClick={() => setSelectAnswer(option)}
              >
                <div className="flex gap-2">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      selectedOption
                        ? "bg-[#942BD4] border-white"
                        : "bg-[#E6E2E9] border-[#CDC7D1]"
                    }  border-[1px] `}
                  ></div>
                  <span className="text-[#4d4950]">{option}</span>
                </div>
                <div className="h-6 border-[1px] border-[#E6E2E9] bg-[#E6E2E9]"></div>
                <div className="text-sm text-[#4d4950]">
                  <p>Answer line 1</p>
                  <p>Answer line 2</p>
                </div>
              </button>
            );
          })}
        </div>

        <button
          className={`rounded-lg h-12 px-6  text-sm  mb-2 w-full ${
            selectAnswer
              ? "bg-[#942BDA] text-white"
              : "bg-[#E6E2E9] text-[#B4ABBA]"
          }`}
        >
          <Link to="/dashboard/result">Next question</Link>
        </button>
        <div className="flex justify-center">
          <button className="text-sm font-medium text-[#942BDA] border-b-2 border-[#942bda]">
            Skip question
          </button>
        </div>
      </div>

      <div className="mx-5">
        <div className="flex justify-between text-[#4D4950] text-xs font-medium mb-2">
          <span className="">Keep going!</span>
          <span className="">5 questions left</span>
        </div>
        <div className="h-8 grid grid-cols-10 rounded overflow-hidden mb-2">
          {quizNumbers.map((num) => {
            return (
              <button
                key={num}
                className="text-xs font-medium h-full min-w-[32px] border-[1px] border-[#E6E2E9]"
              >
                {num < 10 ? "0" : ""}
                {num}
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
  );
};

export default QuizInterface;
