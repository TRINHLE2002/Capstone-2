import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/pen.png';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import './SideBar.scss';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {/* <DiReact size={'3em'} color={"00bfff"} /> */}
                        {/* <span >Hoi Dan IT</span> */}
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    {/* <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                        </MenuItem>
                    </Menu> */}
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem> 
                               Manage Users
                              <Link to="/manager-user"/>
                            </MenuItem>
                            <MenuItem > 
                               Manage Quizzes
                               <Link to="/qizz"/>
                            </MenuItem>
                            <MenuItem> Manage Questions</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;