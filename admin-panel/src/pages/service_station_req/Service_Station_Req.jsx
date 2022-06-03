import "./service_station_req.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Request from '../../components/request/Request'
const Service_Station_Req = () => {
  return (
    <div className='request'>
       
    <Sidebar/>  
    <div className="homeContainer">   
    <Navbar/>
    <hr/>
    <div className="widgets">
     <Request/>
    </div>
    </div> 
  </div>
  )
}

export default Service_Station_Req