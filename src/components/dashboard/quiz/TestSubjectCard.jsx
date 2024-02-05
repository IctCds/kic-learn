import React from "react";

const TestSubjectCard = ({ subject, score, timeTaken, date }) => {
  return (
    <div className="my-2 pb-2 flex flex-col gap-1 border-b-[1px] border-[#F3F0F4]">
      <p className="text-xs text-[#817A86] font-medium">{subject}</p>
      {/* <p className="text-sm text-[#4D4950]">{topic}</p> */}
      <div className="text-xs flex gap-1">
        <span className="font-medium text-[#817A86]">
          Score: <span className="#4D4950 font-normal">{score}%</span>
        </span>
        <span className="font-medium text-[#817A86] ">
          Completed in: <span className="#4D4950 font-normal">{timeTaken}</span>
        </span>
      </div>
      <p className="text-xs text-[#B4ABBA] font-medium">
        {date}
      </p>
    </div>
  );
};

export default TestSubjectCard;
