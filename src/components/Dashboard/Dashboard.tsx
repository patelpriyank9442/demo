import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLoggedIn, logout } from '../helper/utils/auth.utils';

interface Islogin {
  islogin: Object;
  userName?: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const getData = () => {
    const storedData = localStorage.getItem("islogin");
    return storedData ? JSON.parse(storedData) as Islogin : null;
  };
  
  const data = getData()
  
  const handelLogout = () => {
    logout();
    navigate("/login")
  };
  return (
    <header className="bg-slate-100 p-4 fixed top-0 left-0 right-0 z-50  text-white p-4 sticky top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <div className='text-black'>Hello, {data?.userName} </div>
          <nav className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isLoggedIn() ? (
              <div
                onClick={() => handelLogout()}
                className="text-white cursor-pointer"
              >
                Logout
              </div>
            ) : (
              <>
                {/* <Link to={"/login"} className="text-black  md:text-lg">
                Login
              </Link>
              <Link to={"/signup"} className="text-black  md:text-lg">
                Sign Up
              </Link> */}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Dashboard