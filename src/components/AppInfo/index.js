import React from "react";
import Sidebar from "../Sidebar";

function AppInfo() {
  return (
    <>
      <Sidebar />
      <div className="main-content-5">
        <div className="main-header-5">App Info </div>
        <form className="user-details-form">
          <div className="align-inputs">
          <div className="i1">
            <label htmlFor='user-id'>UserId:</label>
            <input id="user-id" />
          </div>
          <div className="i2">
            <label htmlFor='password'>Password:</label>
            <input id="password" />
          </div>
          <div className="i3">
            <label htmlFor='usertitle'>User Title:</label>
            <input id="usertitle" />
          </div>
          <div className="i4">
            <label htmlFor='helpline'>Helpline:</label>
            <input id="helpline" />
          </div>
          <div className="i5">
            <label htmlFor='message'>Message:</label>
            <input id="message" />
          </div>
          
          </div>
          <div className="i6">
            
            <input type="checkbox" id="Allowance"/>
            <label htmlFor="Allowance">Allow Recording</label>
          </div>
          <div className="save-btn">
            <button className="btn-save">Save</button>
          </div>
        </form>
        
      </div>
    </>
  );
}

export default AppInfo;
