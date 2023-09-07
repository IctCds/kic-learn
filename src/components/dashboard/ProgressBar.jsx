import React from "react";

const ProgressBar = ({ topic, score }) => {
  let scoreGrade;
  let gradeTextColor;
  let progressBarColor;
  if (score >= 70 && score <= 100) {
    scoreGrade = "Excellent";
    gradeTextColor = "text-[#56A923]";
    progressBarColor = "excellent";
  } else if (score >= 50 && score < 70) {
    scoreGrade = "Pass";
    gradeTextColor = "text-[#E5A84C]";
    progressBarColor = "pass";
  } else if (score < 50) {
    scoreGrade = "Fail";
    gradeTextColor = "text-[#E54C4C]";
    progressBarColor = "fail";
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1 text-xs font-medium">
        <label htmlFor={topic} className="text-[#817A86]">
          {topic}
        </label>
        <span className={`${gradeTextColor}`}>
          {score}% : {scoreGrade}
        </span>
      </div>
      <progress
        id={topic}
        value={score}
        max="100"
        className={`${progressBarColor} w-full rounded-full border h-[4px]`}
      >
        {score}%
      </progress>
    </div>
  );
};

export default ProgressBar;
