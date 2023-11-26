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
import TeacherRoute from "./TeacherRoute";
import AdminRoute from "./AdminRoute";
import AllClassesAdmin from "../pages/Dashboard/Admin/AllClassesAdmin";

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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
        // student route
            {
                path: 'my-enroll',
                element:<PrivateRoute><Myenroll/></PrivateRoute>
            },
            // teacher route
            {
                path: 'add-class',
                element:<PrivateRoute><TeacherRoute><AddClass/></TeacherRoute></PrivateRoute>
            },
            {
                path: 'my-class',
                element:<PrivateRoute><TeacherRoute><Myclass/></TeacherRoute></PrivateRoute>
               
            },
            // admin routes
            {
                path: 'teacher-request',
                element:<PrivateRoute><AdminRoute><TeacherReq/></AdminRoute></PrivateRoute>
            },
            {
                path: 'manage-users',
                element:<PrivateRoute><AdminRoute><ManageUsers/></AdminRoute></PrivateRoute>
               
            },
            {
                path: 'all-classes-admin',
                element:<PrivateRoute><AdminRoute><AllClassesAdmin/></AdminRoute></PrivateRoute>

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