import React from "react";
import Sidebar from "../Sidebar/index";

function UsersMaster() {
  return (
    <>
      <Sidebar />
      <div className="main-content-3">
        <div className="outer-header-3">
          <div className="filter-3">
            <label htmlFor="filter-3" className="filter3">
              Filter:
            </label>
            <input id="filter-3" className="filter-inp3" />
          </div>
          <button className="Refresh">Refresh</button>
          <button className="Clear-Cache">Clear Cache</button>
          <button className="Mute-All">Mute All</button>
          <button className="Unmute-All">Unmute All</button>
          <button className="Logout-All">Logout All</button>

        </div>
        <div className="active-users-3">
            <div className="header-active-users-3">&nbsp;&nbsp; Active User</div>
            <div className="content-active-users"></div>
        </div>
        <div className="rooms">
            <div className="Room-1">
                <div className="header-room">Room-1</div>

            </div>
            <div className="Room-2">
            <div className="header-room">Room-2</div>

            </div>
        </div><br></br>
      </div>
    </>
  );
}

export default UsersMaster;
