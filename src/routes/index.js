import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersMaster from "../components/UsersMaster";
import ViewHosts from "../components/View Hosts";
import AppInfo from "../components/AppInfo";
import RoomsMaster from "../components/RoomsMaster";
import ViewUsers from "../components/ViewUsers";

function AdminPanel(){
    return(
       <Router>
        <Routes>
            <Route path='/' element={<UsersMaster/>}></Route>
            <Route path='/host' element={<ViewHosts/>}></Route>
            <Route path='/appinfo' element={<AppInfo/>}></Route>
            <Route path='/rooms' element={<RoomsMaster/>}></Route>
            <Route path='/users' element={<ViewUsers/>}></Route>
        </Routes>
       </Router>
    )
}

export default AdminPanel