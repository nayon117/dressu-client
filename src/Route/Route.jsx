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
import OrderItem from "../pages/Dashboard/user/OrterItem";
import MyCart from "../pages/Dashboard/user/MyCart";
import BlogDetails from "../pages/blog/BlogDetails";

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
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch(`https://dressu-server.vercel.app/product/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dressu-server.vercel.app/blog/${params.id}`),
      },
      {
        path: "contact",
        element: <Contact />,
      },
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
        path: "order-item",
        element: (
          <PrivateRoute>
            <OrderItem />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddProduct />
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
          fetch(`https://dressu-server.vercel.app/product/${params.id}`),
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
