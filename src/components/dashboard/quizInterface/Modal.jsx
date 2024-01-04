import React, {useEffect, useRef} from "react";
import { BiStopwatch } from "react-icons/bi";
import { useTimer } from "react-timer-hook";

const Modal = ({
  open,
  close,
  displayButton,
  errorStatus,
  onAction,
  underlineText,
  otherText,
  timer,
}) => {

  const timerRef = useRef();

  const time = new Date()
  time.setSeconds(time.getSeconds() + 10);

  const { seconds } = useTimer({expiryTimestamp : time, autoStart: timer ? true : false, onExpire: ()=> {onAction(); close(false)}})

  useEffect(()=>{
    let handleClose = (e) =>{
      if (!timerRef?.current?.contains(e.target)){
        close(timer ? true : false);
      }
    };
    document.addEventListener('mousedown', handleClose);

    return ()=>{
      document.removeEventListener('mousedown', handleClose)
    }
  })

  return (
    <div>
      {open && (
        <div
          className="fixed top-0 h-screen w-screen bg-[#0000007d]  flex justify-center items-center px-3"
        >
          <div ref={timerRef} className="min-h-[142px] rounded-lg bg-white p-5 opacity-100">
            <div className="mb-4 grid grid-cols-5 items-center">
              <div className="col-span-1 w-12 h-12 bg-[#FCEACF] flex items-center justify-center rounded-full">
                <div
                  className={`w-7 h-7 ${
                    errorStatus ? "bg-[#D42B2B]" : "bg-[#D4902B]"
                  } rounded-full flex justify-center  items-center`}
                >
                  <BiStopwatch className="text-white text-lg" />
                </div>
              </div>

              <p className="text-[#817A86] col-span-4">
                <span className="font-semibold underline">{underlineText}</span>{" "}
                {otherText}
              </p>
            </div>

            {timer && (
              <div className="flex justify-center flex-col text-[#817A86] text-sm">
                <p>Your result is being processed...</p>
                <p>{seconds} seconds</p>
              </div>
            )}

            {displayButton && (
              <div className="flex justify-end gap-7">
                <button
                  className="text-[#942BDA] underline text-sm font-medium"
                  onClick={() => close(false)}
                >
                  NO
                </button>
                <button
                  className="bg-[#942BD4] text-white rounded-lg text-sm font-medium px-4 py-2"
                  onClick={()=> {onAction(); close(false)}}
                >
                  YES
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
