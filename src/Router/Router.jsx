import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProfileInfo from "../Pages/Profile/ProfileInfo";
import PriveatRoute from "../Pages/Routes/PriveatRoute";
import Deshboard from "../Pages/Deshboard/Deshboard";


const Router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path : '',
                element: <Home/>
            },
            {
                path : '/login',
                element: <Login/>
            },
            {
                path : '/register',
                element: <Register/>
            },
            {
                path : '/profileinfo',
                element:<PriveatRoute><ProfileInfo/></PriveatRoute>  
            },
            {
                path : '/deshboard',
                element:<PriveatRoute><Deshboard/>  </PriveatRoute>
            },
        ]
    }
]);

export default Router;