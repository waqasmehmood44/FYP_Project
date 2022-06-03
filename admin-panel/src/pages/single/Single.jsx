import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import React from 'react'
import "./single.scss"
import firebase from "../../util/firebasee";


const Single = () => {

  let id=localStorage.getItem('ID')
  let data;
  firebase.database().ref().child('Users').child("Customer").child("Personal Info").child(id)
  .on("value", snapshot=>{
    console.log(snapshot.val())
    data=snapshot.val()
    console.log(data.name)
  });
  return (
    <div className="u_single">
      <Sidebar />
      <div className="u_singleContainer">
        <Navbar />
        <hr/>
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.dpimg}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">0{data.number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Password:</span> 
                  <span className="itemValue">
                    {data.password}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User Type:</span>
                  <span className="itemValue">{data.user_type}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Single