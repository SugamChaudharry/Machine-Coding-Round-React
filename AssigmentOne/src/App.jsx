import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [hide, setHide] = useState(true)
  return (
    <>
    <main>
      <img src={`${hide ? "./src/assets/eye.svg" : "./src/assets/hideEye.svg"}`} className='size-8 absolute ' onClick={() => setHide((e) => !e)} />
      {hide && ( <div className='absolute top-7 left-9 rounded-[18px]'>
      <Link to={"/otp-form"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 1</span>
      </Link>
      <Link to={"/course-list"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 2</span>
      </Link>
      <Link to={"/batches"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 3</span>
      </Link>
      </div>)}

      <Link to={"https://chaicode.com/"} target='_blank'>
        <img src="./src/assets/images/logo.png" className='absolute bottom-7 right-28 w-[143.62px] h-[150px] rounded-[18px]'/>
      </Link>
    <Outlet />
    </main>
    </>
  )
}

export default App
