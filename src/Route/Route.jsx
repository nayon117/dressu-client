import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import AdminRoute from "./AdminRoute";
import CardDetails from "../pages/DetailsPage/CardDetails";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Shop from "../pages/shop/Shop";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import MyProduct from "../pages/Dashboard/Admin/MyProduct";
import AddBlog from "../pages/Dashboard/Admin/AddBlog";
import UpdateProduct from "../pages/Dashboard/Admin/UpdateProduct";
import MyenrollDetails from "../pages/Dashboard/user/MyenrollDetails";
import Myenroll from "../pages/Dashboard/user/Myenroll";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        loader: () => fetch("http://localhost:5000/products-count"),
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "blog",
        element:<Blog/>
      },
      {
        path: "contact",
        element: <Contact/>,
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // user route
      {
        path: "my-enroll",
        element: (
          <PrivateRoute>
            <Myenroll />
          </PrivateRoute>
        ),
      },
      {
        path: "my-enroll/:id",
        element: (
          <PrivateRoute>
            <MyenrollDetails />
          </PrivateRoute>
        ),
      },
      // admin routes
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AdminRoute>
             <AddProduct/>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-product",
        element: (
          <PrivateRoute>
            <AdminRoute>
            <MyProduct />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoute>
          
              <UpdateProduct />
          
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-blog",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddBlog />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
     
      // common route
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default myCreatedRoute;
