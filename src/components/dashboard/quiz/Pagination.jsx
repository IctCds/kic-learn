import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = ({ page }) => {
  const [active, setActive] = React.useState(1);
  const buttonStyle =
    "w-9 h-9 rounded flex justify-center items-center font-medium text-[#817A86] border-[1px] border-[#E6E2E9]";
  const pageArray = Array.from({ length: page }, (_, index) => index + 1);
  return (
    <div className="flex justify-center gap-2">
      <button className={`${buttonStyle} bg-[#E6E2E9]`}>
        <GrFormPrevious className="text-[#817A86]" />
      </button>
      <div className="flex gap-2">
        {pageArray.map((page) => {
          return (
            <button
              key={page}
              className={`${buttonStyle} ${
                active === page ? "bg-white" : "bg-[#E6E2E9]"
              }`}
              onClick={() => setActive(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button className={`${buttonStyle} bg-[#E6E2E9]`}>
        <GrFormNext className="text-[#817A86]" />
      </button>
    </div>
  );
};

export default Pagination;
