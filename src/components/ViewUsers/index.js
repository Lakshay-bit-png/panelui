import React from "react";
import Sidebar from "../Sidebar";

function ViewUsers() {
  return (
    <>
     <Sidebar/>
      <div className="main-content">
        <div className="user-traffic">
          <div className="total">
            <div className="total-number">125</div>
            <div className="status-user">Total Users</div>
          </div>
          <div className="online">
            <div className="online-number">100</div>
            <div className="status-user">Online Users</div>
          </div>
          <div className="stopped">
            <div className="stopped-number">25</div>
            <div className="status-user">Stopped Users</div>
          </div>
        </div>
        <div className="functional-buttons">
          <div className="btn-1 ">Add New</div>
          <div className="btn-2">Refresh</div>
          <div className="btn-3">Activate All</div>
          <div className="btn-4">SwitchOff All</div>
          <div className="btn-5">Logout</div>
        </div>
        <div className="table-of-content">
          <div className="outer-header">
            <div className="table-title">View Users</div>
            <div className="filter-option-1">
              <label htmlFor="filter-1" className="filter1">
                Filter:
              </label>
              <input id="filter-1" className="filter-inp1" />
            </div>

          </div>
          <div className="inner-header">
            Action: [ L : - Logout] - [ D : - Delete] - [ S : Switched Off] - [A : - Active] - [C - : Change Phone]
          </div>
          <table className="main-table-1">
            <thead style={{fontSize:'16px',backgroundColor:'rgb(25, 39, 77',color:'white'}}>
                <tr>
                <th>User Id </th>
                <th>Party Name</th>
                <th>Reference</th>
                <th>Room</th>
                <th>Log Time</th>
                <th>Platform</th>
                <th>App Version</th>
                <th>Status</th>
                <th>Action</th>
                 
                </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewUsers;
