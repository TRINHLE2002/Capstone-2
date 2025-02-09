import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars, FaUser } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
            <div className="admin-header">
               <div className="menu-icon" onClick={() => setCollapsed(!collapsed)}>
                 <FaBars />
               </div>
             <div className="user-icon">
                  <FaUser className="user" />
          </div>
</div>

                <div className="admin-main">
                   <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Admin;