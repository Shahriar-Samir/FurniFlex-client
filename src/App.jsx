import { Outlet } from "react-router-dom"
import Navbar from "./Components/navbar"


function App() {


  return (
    <>
     <header>
      <Navbar/>
     </header>
      <Outlet/>
    </>
  )
}

export default App
