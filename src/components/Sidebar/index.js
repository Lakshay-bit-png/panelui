import React from "react";
import user from '../../user.png'
import { useNavigate } from "react-router-dom";

function Sidebar(){
    const navigate = useNavigate()
    const redirecttohost=()=>{
        navigate('/host')
    }
    const redirecttousermaster=()=>{
        navigate('/')
    }
    const redirecttoappinfo=()=>{
        navigate('/appinfo')
    }
    const redirecttoroomsmaster=()=>{
        navigate('/rooms')
    }
    const redirecttousers=()=>{
        navigate('/users')
    }
    return(
    <>
    <div className="sidepanel">
        <div className="header-panel">
            Admin Panel
        </div>
        <div className="s-2">
            <div className="my-profile">
                <img src={user} className="profile-img" />
                <div className="name">Lakshay Garg</div>
            </div>
            <div className="partition"></div>
            
                <div className="option" onClick={redirecttousermaster}>Users Master</div>
                <div className="option" onClick={redirecttousers}>Users</div>
                <div className="option" onClick={redirecttohost}>Host Master</div>
                <div className="option" onClick={redirecttoroomsmaster}>Rooms Master</div>
                {/* <div className="option">Cloud Recordings</div> */}
                <div className="option" onClick={redirecttoappinfo}>App Info</div>
                {/* <div className="option">Downloads</div>
                <div className="option">Logout</div> */}
                
            
        </div>
    </div>
    <div className="top-header">
        <div className="hamburg">
            <div className="l1"></div>
            <div className="l2"></div>  
            <div className="l3"></div>

        </div>
        <div className="home">Home</div>
    </div>
    </>)
}

export default Sidebar