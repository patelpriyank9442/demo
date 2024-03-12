
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../components/Login/SignIn'
import Dashboard from '../components/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import SignUp from '../components/Login/SignUp'
import OverviewPage from '../components/OverView/OverviewPage'
import Sidebar from '../components/Sidebar/Sidebar'
import Users from '../components/OverView/OverviewSubmenu/Users'
import Revenue from '../components/OverView/OverviewSubmenu/Revenue'
import SidebarLayout from '../components/SidebarLayout'
import ProtectedRoute from './ProtectedRoute'
import Report from '../components/Reports/Report'
import ReportOne from '../components/Reports/ReposrSubMenu/ReportOne'
import ReportTwo from '../components/Reports/ReposrSubMenu/ReportTwo'
import ReportThree from '../components/Reports/ReposrSubMenu/ReportThree'

const MainRoute = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route> */}
                    <Route path='/login' element={<ProtectedRoute element={<SignIn />} />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route element={<SidebarLayout />}>
                        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
                        <Route path='/overview' element={<OverviewPage />} />
                        <Route path='/overview/users' element={<Users />} />
                        <Route path='/overview/revenue' element={<Revenue />} />
                        <Route path='/reports' element={<Report />} />
                        <Route path='/reports' element={<ReportOne />} />
                        <Route path='/reports/reports2' element={<ReportTwo />} />
                        <Route path='/reports/reports3' element={<ReportThree />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </>
    )
}

export default MainRoute