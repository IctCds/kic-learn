import React from "react";

const CircularProgress = ({ label, score, variant }) => {
  const scorePercentage = (score) => {
    return (score / 10) * 360;
  };

  const primaryColor = "#942BD4";
  const primaryColorbg = "#EBCFFC";
  let progressBarColor;
  let progressBarBgColor;
  if (score >= 7 && score <= 10) {
    progressBarColor = "#56A923";
    progressBarBgColor = "#E0FCCF";
  } else if (score >= 5 && score < 7) {
    progressBarColor = "#E5A84C";
    progressBarBgColor = "#FCEACF";
  } else if (score < 5 && score >= 0) {
    progressBarColor = "#E54C4C";
    progressBarBgColor = "#FCCFCF";
  }
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[72px] h-[72px] rounded-full relative mb-2`}
        style={{
          backgroundColor: `${variant ? primaryColorbg : progressBarBgColor}`,
        }}
      >
        <div
          className="w-[72px] h-[72px] rounded-full circular-bar"
          style={{
            backgroundImage: `conic-gradient(${
              variant ? primaryColor : progressBarColor
            } ${scorePercentage(score)}deg, rgba(255, 255, 255, 0) 0deg)`,
          }}
        >
          <span
            className={`relative z-10 text-[${
              variant ? primaryColor : progressBarColor
            }] font-black`}
          >
            {score}/10
          </span>
        </div>
      </div>
      <p className="font-medium text-xs text-[#817A86]">{label}</p>
    </div>
  );
};

export default CircularProgress;
