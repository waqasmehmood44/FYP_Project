import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Service_provider from "./pages/service provider/Service_provider"
import Single from "./pages/single/Single"
import Sp_View from "./pages/sp_view/Sp_View"
import Service_Station_req from "./pages/service_station_req/Service_Station_Req"
import View_Request from "./pages/view_request/View_Request"
import Approved_Stations from "./pages/approved_station/Approved_Stations"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/">
      
        <Route index element={<Login/>}/>
        <Route path="dashboard" element={<Home/>}/>
         <Route path="service_provider" element={<Service_provider/>}/>
         <Route path="viewdata" element={<Single/>}/>
         <Route path="service_provider_view" element={<Sp_View/>}/>
         <Route path="request" element={<Service_Station_req/>}/>
         <Route path="view_request" element={<View_Request/>}/>
         <Route path="approved_stations" element={<Approved_Stations/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
