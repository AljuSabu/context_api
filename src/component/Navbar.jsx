import { useContext, useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthenticationContext);

  const login = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <header className="p-4 bg-violet-500 text-gray-800">
        <div className="container text-black text-base lg:text-lg flex justify-between h-16 mx-auto">
          <div className="flex items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 text-white"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </div>
          <ul
            className={`fixed top-20 right-0 z-50 w-full bg-violet-500 text-white font-medium flex flex-col items-center gap-6 py-6 transform transition-all duration-300 ease-in-out ${showLinks ? "translate-x-0 opacity-100 blur-none" : "translate-x-full opacity-0 blur-sm"} lg:static lg:translate-x-0 lg:flex-row lg:w-auto lg:bg-transparent lg:opacity-100 lg:blur-none lg:py-0`}
          >
            <li className="cursor-pointer flex justify-center items-center lg:w-25 lg:h-13">
              Home
            </li>
            <li className="cursor-pointer flex justify-center items-center lg:w-25 lg:h-13">
              Blogs
            </li>
            {isLoggedIn ? (
              <li className="cursor-pointer flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
                <div className="flex justify-center items-center lg:w-25 lg:h-13">
                  My Blogs
                </div>
                <button
                  onClick={logout}
                  className="lg:hover:bg-violet-600 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-200 transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md lg:border"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
                <button
                  onClick={login}
                  className="lg:border lg:hover:bg-violet-600 lg:hover:scale-105 lg:hover:-translate-y-0.5 lg:hover:shadow-md shadow-black/50 lg:active:scale-95 lg:active:shadow-inner lg:duration-200 transition-none lg:transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md "
                >
                  Login
                </button>
                <button className="lg:bg-violet-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-200 transition-all ease-out lg:w-25 lg:h-13 lg:font-semibold rounded-md">
                  Sign up
                </button>
              </li>
            )}
          </ul>
          <button
            onClick={() => {
              setShowLinks((open) => !open);
            }}
            className="lg:hidden h-full w-15"
          >
            {showLinks ? (
              <CloseIcon className="text-3xl! md:text-4xl!" />
            ) : (
              <MenuIcon className="text-3xl! md:text-4xl!" />
            )}
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
