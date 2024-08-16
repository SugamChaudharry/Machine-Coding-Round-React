import { Link,Outlet } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {
  const [hide, setHide] = useState(true)
  return (
    <div className='w-screen h-screen'>
      <img src={`${hide ? "./src/assets/eye.svg" : "./src/assets/hideEye.svg"}`} className='size-8 absolute ' onClick={() => setHide((e) => !e)} />
      {hide && ( <div className='absolute top-7 left-9 rounded-[18px]'>
      <Link to={"/random-user"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 1</span>
      </Link>
      <Link to={"/random-jokes"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 2</span>
      </Link>
      <Link to={"/cats-listing"} className='m-4 p-4 border-2 bg-pink-500 text-white'>
      <span>page 3</span>
      </Link>
      </div>)}
    <Outlet />
    </div>
  )
}

export default App
