import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import Teach from "../pages/Teach/Teach";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Myenroll from "../pages/Dashboard/Student/Myenroll";
import Myclass from "../pages/Dashboard/Teacher/Myclass";
import AddClass from "../pages/Dashboard/Teacher/AddClass";
import TeacherReq from "../pages/Dashboard/Admin/TeacherReq";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element:<Home/>
            },
            {
                path: 'all-classes',
                element: <PrivateRoute><AllClasses/></PrivateRoute>
            },
            {
                path: 'teach',
                element: <Teach/>
            },
        ]
        
    },
    {
        path: '/register',
        element:<Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
        // student route
            {
                path: 'my-enroll',
                element:<Myenroll/>
            },
            // teacher route
            {
                path: 'add-class',
                element:<AddClass/>
            },
            {
                path: 'my-class',
                element:<Myclass/>
            },
            // admin routes
            {
                path: 'teacher-request',
                element:<TeacherReq/>
            },
            {
                path: 'manage-users',
                element:<ManageUsers/>
            },
            {
                path: 'all-classes',
                element:<AllClasses/>
            },
            // common route
            {
                path: 'profile',
                element:<Profile/>
            },
        ]
    }
])

export default myCreatedRoute;