import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Userdata from '../../components/userdata/Userdata'

const Home = () => {
  return (
    <div className='home'>
       
      <Sidebar/>  
      <div className="homeContainer">   
      <Navbar/>
      <hr/>
      <div className="widgets">
        <Userdata/>
      </div>
      </div> 
    </div>
  )
}

export default Home

