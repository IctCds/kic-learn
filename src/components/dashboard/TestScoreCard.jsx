import React from "react";
import Pagination from "./Pagination";
import ProgressBar from "./ProgressBar";
import CircularProgress from "./CircularProgress";

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

const TestScoreCard = ({
  subject,
  subjectScore,
  topicsCovered,
  topicsScores,
  pagination,
}) => {
  return (
    <div className="border-[#E6E2E9] border-[1px] rounded-lg p-4 pb-4 mb-6">
      <div className="flex gap-[10px]">
        <span className="text-[#343036] font-bold">{subject}</span>
        <span className="rounded border-[1px] px-2 bg-[#EFFEE6] font-semibold border-[#E0FCCF] text-[#56A923] text-[10px] flex items-center">
          BEST SUBJECT
        </span>
      </div>
      <div>
        {/* circular progress */}
        <div className="flex justify-around my-4">
          <CircularProgress score={subjectScore} label="Highest Score" />
          <CircularProgress
            score={topicsCovered}
            label="Topic Covered"
            variant={true}
          />
        </div>

        {/* each topic score bar */}
        <div className="flex flex-col gap-4">
          {topicsScores?.map((data,index) => {
            const { topic, score } = data;
            return <ProgressBar topic={topic} score={score} key={`${topic}-${index}`}/>;
          })}
        </div>
        <div className="mt-6">
          <Pagination page={pagination} />
        </div>
      </div>
    </div>
  );
};

export default TestScoreCard;
