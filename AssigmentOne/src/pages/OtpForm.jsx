import { useState,useRef } from 'react'

const OtpForm = () => {
  return (
    <div className='w-full h-screen bg-blue-400 flex items-center flex-col justify-around font-mono'>
      <h1 className='text-[80px] font-bold leading-[96.82px] text-white drop-shadow-lg'>Chai aur code</h1>
      <div className=' bg-white rounded-lg w-[53vw] h-[64vh] flex items-center flex-col justify-around'>
      <div className='w-full flex  flex-col items-center justify-center gap-3'>
        <h2 className='text-black text-4xl'>Mobile Phone Verification</h2>
        <p className='text-gray-500 w-[70%]  text-center'>Enter the 4-digit verification code that was sent to your phone number.</p>
      </div>
        <form className='w-full flex flex-col items-center justify-center gap-4'>
         <div className='flex gap-4'>
         <input  type='number'
            className='bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center'
            />
          <input  type='number'
            className='bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center'
            />
          <input  type='number'
            className='bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center'
            />
          <input  type='number'
            className='bg-blue-100 w-[5.5rem] h-24 rounded-lg text-4xl flex justify-center text-center'
            />
         </div>
          <button className='bg-blue-900 rounded-lg w-[417px] h-[64px] text-white'>Verify Account</button>
        </form>
      <div>
      Didn’t receive code? <span>Resend</span>
      </div>
      </div>
    </div>
  )
}

export default OtpForm