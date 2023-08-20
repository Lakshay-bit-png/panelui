import React from "react";
import Sidebar from "../Sidebar";

function RoomsMaster(){

    return(
        <>
        <Sidebar/>
        <div className="main-content-4">
            <div className="main-header-4">Rooms Master</div>
            <div className="room-count-table">
                <table className="main-table-4">
                    <thead style={{backgroundColor:'black',color:'white',fontSize:'16px',height:'30px'}}>
                        <tr>
                        <th>Room Name</th>
                        <th>User Count</th>
                        <th>Meeting Id</th>
                        <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Room-No-1</td>
                            <td>75</td>
                            <td>8172635463</td>
                            <td>Eybalf67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}
export default RoomsMaster;