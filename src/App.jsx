import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Components/navbar"


function App() {
 const location = useLocation()

 if(location.pathname === '/signin' || location.pathname==='/signup'){
    return <>
    <Outlet/>
  </>
 }
 else{
  return (
    <>
     <header className="w-full border-b">
      <Navbar/>
     </header>
      <Outlet/>
    </>
  )
 }
 
}

export default App
