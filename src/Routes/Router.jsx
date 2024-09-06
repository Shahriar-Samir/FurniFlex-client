import {createBrowserRouter} from 'react-router-dom'
import Signup from "../Pages/Signup/Signup";
import App from '../App';
import Login from '../Pages/login/login';
import Products from '../Pages/Products/Products';


const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
        {
            path: '/signup',
            element: <Signup/>,
        },
        {
            path: '/signin',
            element: <Login/>,
        },
        {
            path: '/products',
            element: <Products/>
        }
    ]

}])

export default router;