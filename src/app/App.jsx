import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar"
import Home from "../feature/home/home"
import Pricing from "../feature/pricing/pricing"
import Features from "../feature/features/features"
import React, { useContext } from 'react'
import Login from "../feature/login/Login"
import { Context } from '../index'


const App = () => {
    const { user } = useContext(Context)
    return(
    <div style={{display: "flex", flexDirection: 1}}>
        <Sidebar/>
        <Routes>
        {user.isAuth ? (
            <Route path={'/'} element={<Home/>}/>,
            <Route path={'/pricing'} element={<Pricing/>}/>,
        <Route path={'/features'} element={<Features/>}/>
        ) : (
            <Route path={'/login'} element={Login}/>
        )}
        </Routes>
    </div>
    )
        }
export default App