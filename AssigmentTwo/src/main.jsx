import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {CatsListing,RandomJokes,RandomUser} from "./pages/index.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Navigate to="/random-user" />
      },
      {
        path:"/random-user",
        element: <RandomUser />
      },
      {
        path:"/random-jokes",
        element:  <RandomJokes />
      },
      {
        path: "/cats-listing",
        element: <CatsListing />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
