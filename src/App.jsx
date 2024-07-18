
import {  RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Favourite from './components/Favourite'


function App() {
 
  const router=createBrowserRouter([  
    {path:"/",element:<Login/>},
    {path:"/Signup",element:<Register/>},
    {path:"/Dashboard",element:<Dashboard  />},
    {path:"/fav",element:<Favourite/>}
  ])
  
  return (
    <>
     <RouterProvider router={router} >
     </RouterProvider>
     
    </>
  )
}

export default App
