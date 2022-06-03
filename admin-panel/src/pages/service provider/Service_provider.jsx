import React from 'react'
import "./service_provider.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Sp_Data from '../../components/sp_data/Sp_Data'

const service_provider = () => {
  return (
    <div className='service_provider'>
      
      <Sidebar/>  
      <div className="SP_Container">   
      <Navbar/>
      <hr/>
      <div className="widgets">
        <Sp_Data/>
      </div>
      </div> 
    </div>
  )
}

export default service_provider