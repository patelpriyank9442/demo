import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

const SubMenu: React.FC<{ item: any }> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    // const [childNav, setchildNav] = useState(false)
    const showSubnav = () => setSubnav(!subnav);
    // const showchildNav = () => setchildNav(!childNav)

    return (
        <>
            <Link
                to={item.path}
                className="flex text-white justify-between items-center p-5 h-16 no-underline text-lg"
                onClick={item.subNav && showSubnav}
            >
                <div className="flex items-center">
                    {item.icon}
                    <span className="ml-4">{item.title}</span>
                </div>
                <div>{item.subNav && (subnav ? item.iconOpened : item.iconClosed)}</div>
            </Link>
            {subnav &&
                item.subNav.map((subItem: any, index: number) => (
                    <Link
                        to={subItem.path}
                        className="bg-gray-700 h-16 pl-12 flex justify-between items-center text-white text-lg no-underline hover:bg-purple-700"
                        key={index}
                    >
                        <div className="flex items-center">
                            {subItem.icon}
                            <span className="ml-4">{subItem.title}</span>
                        </div>
                        {/* <div>{subItem.childNav && (childNav ? subItem.iconOpened : subItem.iconClosed)}</div> */}
                    </Link>
                ))}
            {/* {childNav &&
                item.subNav.map((subItem: any, index: number) => (
                    subItem?.childNav?.map((row: any, index: number) => (
                        <Link
                            to={row.path}
                            className="bg-gray-700 h-16 pl-12 flex items-center text-white text-lg no-underline hover:bg-purple-700"
                            key={index}
                        >
                            {row.icon}
                            <span className="ml-4">{row.title}</span>
                        </Link>
                    ))
                ))} */}
        </>
    );
};

export default SubMenu;
