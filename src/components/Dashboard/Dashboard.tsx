import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLoggedIn, logout } from '../helper/utils/auth.utils';
import Sidebar from '../Sidebar/Sidebar';

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
    <>
      {/* <Sidebar /> */}
        <div className="container mx-auto">
          dfsdf
        </div>
    </>
  )
}

export default Dashboard