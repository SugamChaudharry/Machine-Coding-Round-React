import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='w-screen h-screen'>
    <Outlet className="z-10" />
    </div>
  )
}

export default App
