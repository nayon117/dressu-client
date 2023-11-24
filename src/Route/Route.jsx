import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import Teach from "../pages/Teach/Teach";

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
                element: <AllClasses/>
            },
            {
                path: 'teach',
                element: <Teach/>
            },
        ]
        
    }
])

export default myCreatedRoute;