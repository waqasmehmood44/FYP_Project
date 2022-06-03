import "./request.scss"
import React, { useEffect } from 'react'
import { DataGrid} from '@mui/x-data-grid';
// import {userColumns} from "../../ss_datatable_source";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "../../util/firebasee";
 
    
    const Request = () => {

        const [data, setData] = useState([]);

        useEffect(()=>{
            //Fetch Service Station Requests
            try{
             let list=[];
             firebase.database().ref().child('Users').child("Service Provider").child("Service Station")
             .on("value", snapshot=>{
               snapshot.forEach(snap => {
                   list.push({id: snap.key ,...snap.val()});
                   
               });
             
                 setData(list);
             });
             
            
            } catch(err){
       
            }
       
       
           },[])
           console.log(data)
        const handleReject = (id) => {
            setData(data.filter((item) => item.id !== id));
            firebase.database().ref().child('Users').child("Service Provider").child("Service Station").child(id).remove()
            window.location.href='/request'
      
          };
           const handleAccept=(id,name,phone_no,lat,lng,ss_img,address)=>{
            const ref=firebase.database().ref().child('Users').child("Service Provider").child("Approved Service Stations").child(id);
            ref.set({
              address: address,
              lat: lat,
              lng : lng,
              name : name,
              phone_no : phone_no,
              service_station_id : id,
              ss_img : ss_img
            });
            firebase.database().ref().child('Users').child("Service Provider").child("Service Station").child(id).remove()
            window.location.href='/request'
            }
            const handleView =(id)=>{
                localStorage.setItem('req_id',id)
                window.location.href='/view_request'
            }
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">

                <div 
                  className="viewButton"
                  onClick={() => handleView(params.row.id)}
                  >View</div>
                 
                  <div 
                  className="acceptButton"
                  onClick={() => handleAccept(params.row.id,params.row.name,params.row.phone_no,params.row.lat,params.row.lng,params.row.ss_img,
                    params.row.address)}
                  >Accept</div>
                 
                <div
                  className="deleteButton"
                  onClick={() => handleReject(params.row.id)}
                >
                  Reject
                </div>
              
              </div>
            );
          },
        },
      ];
     const userColumns = [
        // { field: "id", headerName: "ID", width: 70 },
        { 
          field: "user",
          headerName: "Image",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.ss_img} alt="avatar" />
                {params.row.username}
              </div>
            );
          },
        },
    
        {
          field: "name",
          headerName: "Name",
          width: 230,
        },
        {
          field: "address",
          headerName: "Address",
          width: 230,
        },
        
      ];
      return (
        <div><h2 style={{ fontSize: '20px', marginLeft :"30px",marginTop:"25px"}}>Requests</h2>
        <div className="datatable">
         <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
        </div>
        </div>
      )
    }
    
    export default Request