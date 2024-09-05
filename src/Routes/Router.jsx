import {createBrowserRouter} from 'react-router-dom'
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([{
    path: '/signup',
    element: <Signup/>
}])

export default router;