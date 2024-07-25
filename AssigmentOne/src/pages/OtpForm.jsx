import { useState, useRef } from "react";

const OtpForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const btnRef = useRef(null);
  const [correctOtp, setCorrectOtp] = useState(null)

  const handleSumbit = (e) =>{
    e.preventDefault();
    setCorrectOtp(() => {
      if (otp[0] === "1" && otp[1] === "2" && otp[2] === "3" && otp[3] === "4"){
        return true
      }
      return false
    })
  }
  const handleInputChange = (e, i, nextInputRef, prevInputRef) => {
    if (otp[i].length == 0) {
      const newOtp = [...otp];
      newOtp[i] = e.target.value;
      setOtp(() => {
        return [...newOtp];
      });
      nextInputRef.current.focus();
    }else if (otp[i].length == 1){
      if (e.target.value === ""){
        const newOtp = [...otp];
        newOtp[i] = e.target.value
        setOtp(() => {
          return [...newOtp];
        });
        prevInputRef.current.focus();
      }else{
        const newOtp = [...otp];
        newOtp[i] = e.target.value.charAt(1)
        setOtp(() => {
          return [...newOtp];
        });
        nextInputRef.current.focus();
      }
    }
  };
  return (
    <div className="w-full h-screen bg-blue-400 flex items-center flex-col justify-around font-mono">
      <h1 className="text-[80px] font-bold leading-[96.82px] text-white drop-shadow-lg">
        Chai aur code
      </h1>
      <div className=" bg-white rounded-lg w-[53vw] h-[64vh] flex items-center flex-col justify-around">
        <div className="w-full flex  flex-col items-center justify-center gap-3">
          <h2 className="text-black text-4xl">Mobile Phone Verification</h2>
          <p className="text-gray-500 w-[70%]  text-center">
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>
        </div>
        <form className="w-full flex flex-col items-center justify-center gap-4"
        onSubmit={(e) => handleSumbit(e)}
        >
          <div className="flex gap-4">
            <input
              type="number"
              onChange={(e) => handleInputChange(e, 0,input2Ref,input1Ref)}
              value={otp[0]}
              className={` ${correctOtp === null ? "border-2 border-black" : correctOtp === true ? "border-4 border-green-700" : "border-4 border-red-700"} bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center`}
              ref={input1Ref}
              maxLength={1}
            />
            <input
              type="number"
              onChange={(e) => handleInputChange(e, 1,input3Ref,input1Ref)}
              value={otp[1]}
              className={` ${correctOtp === null ? "border-2 border-black" : correctOtp === true ? "border-4 border-green-700" : "border-4 border-red-700"} bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center`}
              ref={input2Ref}
              maxLength={1}
            />
            <input
              type="number"
              onChange={(e) => handleInputChange(e, 2,input4Ref,input2Ref)}
              value={otp[2]}
              className={` ${correctOtp === null ? "border-2 border-black" : correctOtp === true ? "border-4 border-green-700" : "border-4 border-red-700"} bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center`}
              ref={input3Ref}
              maxLength={1}
            />
            <input
              type="number"
              onChange={(e) => handleInputChange(e, 3,input4Ref,input3Ref)}
              value={otp[3]}
              className={` ${correctOtp === null ? "border-2 border-black" : correctOtp === true ? "border-4 border-green-700" : "border-4 border-red-700"} bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center`}
              ref={input4Ref}
              maxLength={1}
            />
          </div>
          <button ref={btnRef} className= {`${correctOtp === null ? "bg-blue-900" : correctOtp === true ? "bg-green-900" : "bg-red-900"}  rounded-lg w-[417px] h-[64px] text-white`}>
            Verify Account
          </button>
        </form>
        <div>
          Didn’t receive code? <span className="text-blue-600">Resend</span>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
