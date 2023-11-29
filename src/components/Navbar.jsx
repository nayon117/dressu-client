import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#332885] text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink
          to="/all-classes"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#332885] text-white" : ""
          }
        >
          All Classes
        </NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink
          to="/teach "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-[#332885] text-white" : ""
          }
        >
          Teach On Skillify
        </NavLink>
      </li>
    </>
  );

  // context
   const {user,logOut} = useAuth() || {}

  return (
    <div className="navbar py-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navLinks}
          </ul>
        </div>
        <a className="font-bold flex    ">
          <img className="w-20 h-12" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52"
            >
              <li>
                <button className="btn  btn-sm whitespace-nowrap  btn-ghost">
                  {user?.displayName}
                </button>
              </li>
              <Link to="/dashboard">
                <div className="btn block mx-auto mt-2 btn-sm whitespace-nowrap  btn-ghost">
                  Dashboard
                </div>
              </Link>

              <li>
                <button onClick={logOut} className="btn btn-sm whitespace-nowrap   btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button data-tip="Login now" className="btn tooltip btn-sm text-white bg-[#332885]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
