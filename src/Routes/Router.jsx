import {createBrowserRouter} from 'react-router-dom'
import Signup from "../Pages/Signup/Signup";
import App from '../App';
import Login from '../Pages/login/login';
import Products from '../Pages/Products/Products';
import Cart from '../Pages/Cart/Cart';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import Unfinished from '../Components/Unfinished';


const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
        {
            path: '/signup',
            element: <AuthRoute><Signup/></AuthRoute>,
        },
        {
            path: '/signin',
            element: <AuthRoute><Login/></AuthRoute>,
        },
        {
            path: '/products',
            element: <PrivateRoute><Products/></PrivateRoute>
        },
        {
            path: '/cart',
            element: <PrivateRoute><Cart/></PrivateRoute>
        },
        {
            path: '/categories',
            element: <PrivateRoute><Unfinished/></PrivateRoute>,
        },
        {
            path: '/custom',
            element: <PrivateRoute><Unfinished/></PrivateRoute>,
        },
        {
            path: '/',
            element: <PrivateRoute><Unfinished/></PrivateRoute>,
        }
    ]

}])

export default router;