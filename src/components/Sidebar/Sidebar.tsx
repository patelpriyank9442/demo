import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { isLoggedIn, logout } from '../helper/utils/auth.utils';
interface Islogin {
  islogin: Object;
  userName?: string;
}
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
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
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="flex bg-gray-900 h-16 justify-between items-center">
          <Link to="#" className="ml-8 text-2xl">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <p className='text-white text-center'> hello </p>
          <nav className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isLoggedIn() && (
              <div
                onClick={() => handelLogout()}
                className="text-white cursor-pointer"
              >
                Logout
              </div>
            )}
          </nav>
        </div>
        <nav className={`bg-gray-900 w-64 h-screen fixed top-0 left-0 transition-transform ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="w-full">
            <Link to="#" className="text-2xl ml-8">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
