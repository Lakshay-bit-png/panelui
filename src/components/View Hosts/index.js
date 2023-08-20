import React from "react";
import Sidebar from "../Sidebar";
import { useEffect } from "react";

function ViewHosts() {
  useEffect(() => {
  const datafetched = [{"hostid":"ab4f","usercount":"aass","roomname":"112","email":"as@gmail.com","password":"asdfgh","ip":"102.168.0.1","login":"yes","platform":"ios","version":"1.2.3","status":"active","action":""}]
  var tr = document.createElement('tr')
  var td = document.createElement('td')
  td.textContent=datafetched[0].hostid
  tr.appendChild(td)
  console.log(1)
  document.querySelector('.main-table-2').appendChild(tr)
}, []);
  return (
    <>
    <Sidebar/>
      <div className="main-content-2">
        <div className="user-traffic-2">
          <div className="total-2">
            <div className="total-number-2">125</div>
            <div className="status-user-2">Total Hosts</div>
          </div>
          <div className="online">
            <div className="online-number-2">100</div>
            <div className="status-user-2">Online Hosts</div>
          </div>
          <div className="stopped">
            <div className="stopped-number-2">25</div>
            <div className="status-user-2">Stopped </div>
          </div>
        </div>
        <div className="functional-buttons-2">
          <div className="btn-22">Refresh</div>
          <div className="btn-23">Activate All</div>
          <div className="btn-24">Stop All</div>
          <div className="btn-25">Logout All</div>
        </div>
        <div className="table-of-content-2">
          <div className="outer-header-2">
            <div className="table-title-2">View Hosts</div>
            <div className="filter-option-2">
              <label htmlFor="filter-2" className="filter2">
                Filter:
              </label>
              <input id="filter-2" className="filter-inp2" />
            </div>

          </div>
          <div className="inner-header-2">
            Action:[ S : STOP] - [A : - Active] - [C - : Change Phone]
          </div>
          <table className="main-table-2">
            <thead style={{fontSize:'16px',backgroundColor:'rgb(25, 39, 77',color:'white'}}>
                <tr>
                <th>Host Id </th>
                <th>User Count</th>
                <th>Room Name</th>
                <th>Email-Address</th>
                <th>Password</th>
                <th>IP Address</th>
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

export default ViewHosts;
