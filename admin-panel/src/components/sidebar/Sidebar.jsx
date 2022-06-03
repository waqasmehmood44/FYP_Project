import "./sidebar.scss"
 import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleIcon from '@mui/icons-material/People';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import GppGoodIcon from '@mui/icons-material/GppGood';
import {Link} from "react-router-dom"
import { color } from "@mui/system";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
           <Link to="/dashboard" style={{textDecoration: "none"}}>   
           <span className="logo">Car Wash</span>
           </Link>
        </div>
        <hr/>
        <div className="centre">
            <ul>
            <Link to="/dashboard" style={{textDecoration: "none" ,color:"gray"}}>   
                <li className="icon">
                    <PeopleIcon/>
                    <span>Users</span>

                </li>
                </Link>
                <Link to="/service_provider" style={{textDecoration: "none",color:"gray"}}> 
                <li>
                    <SupervisorAccountOutlinedIcon/>
                    <span>Service Providers</span>
                </li>
                </Link>
                <Link to="/request" style={{textDecoration: "none" ,color:"gray"}}> 
                <li>
                    <GppGoodIcon/>
                    <span>Requests</span>
                </li>
                </Link>
                <Link to="/approved_stations" style={{textDecoration: "none" ,color:"gray"}}>   
                <li>
                    <CheckBoxIcon/>
                    <span>Approved Stations</span>
                </li>
                </Link>
                <Link to="/" style={{textDecoration: "none" ,color:"gray"}}> 
                <li>
                    <LogoutOutlinedIcon/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
        <div className="bottom"></div>



    </div>
  )
}

export default Sidebar