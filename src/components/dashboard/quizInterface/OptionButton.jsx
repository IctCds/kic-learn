import React from "react";

const OptionButton = () => {
  return (
    <button
      className="flex rounded-lg border-[1px] border-[#E6E2E9] bg-white items-center gap-3 w-full my-3 p-2"
    >
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full bg-[#E6E2E9] border-[1px] border-[#CDC7D1]"></div>
        <span className="text-[#4d4950]">{option}</span>
      </div>
      <div className="h-6 border-[1px] border-[#E6E2E9] bg-[#E6E2E9]"></div>
      <div className="text-sm text-[#4d4950]">
        <p>Answer line 1</p>
        <p>Answer line 2</p>
      </div>
    </button>
  );
};

export default OptionButton;
