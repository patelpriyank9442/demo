
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../components/Login/SignIn'
import Dashboard from '../components/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'

const MainRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path='/login' element={<SignIn />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRoute