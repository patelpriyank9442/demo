import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const SidebarLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default SidebarLayout