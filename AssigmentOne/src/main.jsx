import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import {OtpForm,CourseList,Batches} from './pages/index.js'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <OtpForm />
      },
      {
        path:"/otp-form",
        element: <OtpForm />
      },
      {
        path:"/course-list",
        element:  <CourseList />
      },
      {
        path: "/batches",
        element: <Batches />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
