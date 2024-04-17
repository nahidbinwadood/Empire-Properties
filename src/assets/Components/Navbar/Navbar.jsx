import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { useState } from "react";

const Navbar = () => {
  const { user,logOut } = UseAuth();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="container mx-auto pt-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">
                <a>Home</a>
              </NavLink>
              
              
              <NavLink to="blogs">
                <a>Blogs</a>
              </NavLink>
              
            </ul>
          </div>
          <Link to="/" className="cursor-pointer">
            <h2 className="pp font-bold text-2xl">
              {" "}
              Empire <span className="text-[#EB6753]">Properties</span>
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-8 menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "rounded-xl text-[#fff] bg-[#011936CC]" : "font-bold"
              }
            >
              <button className="px-8 py-3 pp text-lg">Home</button>
            </NavLink>
            <NavLink
              to="./update-profile"
              className={({ isActive }) =>
                isActive ? "rounded-xl text-[#fff] bg-[#011936CC]" : "font-bold"
              }
            >
              <button className="px-8 py-3 pp text-xl">Update Profile</button>
            </NavLink>

            <NavLink
              to="./blogs"
              className={({ isActive }) =>
                isActive ? "rounded-xl text-[#fff] bg-[#011936CC]" : "font-bold"
              }
            >
              <button className="px-8 py-3 pp text-xl">Blogs</button>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end md:gap-4">
          {/* <Link to='/log_in' className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#EB6753] ">Log In </Link> */}

          <div className="navbar-end">
            {user?.email ? (
              <div className="flex items-center gap-4">
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="w-10 relative rounded-full re"
                >
                  <img
                    className="rounded-full cursor-pointer transition hover:scale-95"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  {hovered && (
                    <div className="absolute -left-1/2 top-1/2 transform transition bg-white bg-opacity-70 p-2 text-sm font-bold rounded">
                      
                        <div className="pp font bold">{user.displayName}</div>
                      
                    </div>
                  )}
                </div>

                <div className="flex pp font-bold">
                  <button onClick={logOut} className="btn btn-sm  btn-ghost">Logout</button>
                </div>
              </div>
            ) : (
              <Link
                to="/log_in"
                className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#EB6753] "
              >
                Log In{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
