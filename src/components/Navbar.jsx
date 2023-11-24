import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="font-medium text-base">
        <Link to="/available-foods">All Classes</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/add-food">Teach On Skillify</Link>
      </li>
    </>
  );

  // context
  const user = "";

  // const handleSignUp = () => {
  //     logOut()
  //     .then(() => {
  //          toast.success('logged out successfully')
  //       }).catch((error) => {
  //           toast.error(error.message);
  //       });
  // }

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
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52"
            >
              <li>
                <button className="btn   btn-sm whitespace-nowrap  btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <Link to="/dashboard">
                <div className="btn   btn-sm whitespace-nowrap  btn-ghost">
                  Dashboard
                </div>
              </Link>

              <li>
                <button className="btn btn-sm whitespace-nowrap   btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-neutral">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
