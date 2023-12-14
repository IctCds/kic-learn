import React from "react";
import { CiSearch } from "react-icons/ci";
import { selectSubject } from "../../../features/quiz/quizSlice";
import { useDispatch } from "react-redux";

const FormSelect = ({ labelText, options }) => {
  let dispatch = useDispatch()

  const handleChange = event =>{
    let subject = event.target.value;
    dispatch(selectSubject(subject))
  }

  return (
    <div className="mb-3">
      <p className="text-xs text-[#817A86] font-medium leading-4 mb-1">
        {labelText}
      </p>
      <div className="relative h-10 flex items-center">
        <select className="bg-[#F3F0F4] border-[1px] border-[#E6E2E9] rounded-lg  px-2 text-sm leading-5 text-[#817A86] w-full focus:outline-none focus:border-[#942BD4] appearance-none h-full" onChange={handleChange}>
          {options.map((option) => {
            return (
              <option key={option} className="">
                {option}
              </option>
            );
          })}
        </select>
        <div className="absolute right-2 text-[#817A86]" >
          <CiSearch />
        </div>
      </div>
    </div>
  );
};
export default FormSelect;
