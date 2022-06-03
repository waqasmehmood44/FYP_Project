import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./view_request.scss"
import React, { useEffect } from 'react'
import firebase from "../../util/firebasee";
 


const View_Request = () => {
    let id=localStorage.getItem('req_id')
    let ss_data,services_data;
 
    firebase.database().ref().child('Users').child("Service Provider").child("Service Station").child(id)
    .on("value", snapshot=>{
      ss_data=snapshot.val()
      console.log(ss_data)
      localStorage.setItem('name',ss_data.name)
      localStorage.setItem('ss_img',ss_data.ss_img)
      localStorage.setItem('lat',ss_data.lat)
      localStorage.setItem('lng',ss_data.lng)
      localStorage.setItem('phone_no',ss_data.phone_no)
      localStorage.setItem('address',ss_data.address)
      // name1 =ss_data.name;
    });

     
    firebase.database().ref().child('Users').child("Service Provider").child("Services").child(id)
    .on("value", snapshot1=>{
    services_data=snapshot1.val()
    console.log(services_data)
    localStorage.setItem('service_1',services_data.service_1)
    localStorage.setItem('service_2',services_data.service_2)
    localStorage.setItem('service_3',services_data.service_3)
    localStorage.setItem('service_4',services_data.service_4)
    localStorage.setItem('price_1',services_data.price_1)
    localStorage.setItem('price_2',services_data.price_2)
    localStorage.setItem('price_3',services_data.price_3)
    localStorage.setItem('price_4',services_data.price_4)
    });

    useEffect(() => {
      if (localStorage.getItem("price_1") === "undefined") {
        localStorage.setItem('price_11', "Not Available")
      } else {
        localStorage.setItem('service_11',localStorage.getItem('service_1'))
        localStorage.setItem('price_11',localStorage.getItem('price_1'))

      }

      if (localStorage.getItem("price_2") === "undefined") {
        localStorage.setItem('price_22', "Not Available")

      } else {
        localStorage.setItem('service_22',localStorage.getItem('service_2'))
        localStorage.setItem('price_22',localStorage.getItem('price_2'))
      }


      if (localStorage.getItem("price_3") === "undefined") {
        localStorage.setItem('price_33', "Not Available")

      } else {
        localStorage.setItem('service_33',localStorage.getItem('service_3'))
        localStorage.setItem('price_33',localStorage.getItem('price_3'))
      }


      if (localStorage.getItem("price_4") === "undefined") {
        localStorage.setItem('price_44', "Not Available")

      } else {
        localStorage.setItem('service_44',localStorage.getItem('service_4'))
        localStorage.setItem('price_44',localStorage.getItem('price_4'))
      }


    }, []);


  return (
    <div className="view_req">
    <Sidebar />
    <div className="view_singleContainer">
      <Navbar />
      <hr/>
    <div>
    <div className="top">
        <div className="left">
          <h1 className="title">Information</h1>
          <div className="item">
          
            <div className="ss_details">
            <img
              src={localStorage.getItem('ss_img')}
              alt=""
              className="itemImg"
            />
              <h1 className="itemTitle">{localStorage.getItem('name')}</h1>
              <div className="detailItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">{localStorage.getItem('address')}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone No:</span>
                <span className="itemValue">0{localStorage.getItem('phone_no')} </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Lattitude:</span> 
                <span className="itemValue">{localStorage.getItem('lat')}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Longitude:</span> 
                <span className="itemValue">{localStorage.getItem('lng')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          
        </div>
      </div>
    <div className="top">
        <div className="left">
          <h1 className="title">Servcies</h1>
          <div className="item">
            <div className="ss_details">
              <div className="detailItem">
                <span className="itemKey">Body wash: </span>
                <span className="itemValue">{localStorage.getItem('price_11')}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Interior cleaning: </span>
                <span className="itemValue">{localStorage.getItem('price_22')}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Engine Detailing: </span> 
                <span className="itemValue">{localStorage.getItem('price_33')}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Car Polish: </span>
                <span className="itemValue">{localStorage.getItem('price_4')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          
        </div>
      </div>


 

    </div>





    </div>
    </div>
  )
}


export default View_Request