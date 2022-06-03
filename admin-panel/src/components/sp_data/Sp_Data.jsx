import  "./sp_data.scss";
import React, { useEffect } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import {userColumns,userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "../../util/firebasee";
const Sp_Data = () => {
    const [sp_data, setsp_data] = useState([]);
    //Fetch Service Provier Data
    useEffect(()=>{
    try{
        let list1=[];
        firebase.database().ref().child('Users').child("Service Provider").child("Personal Info")
        .on("value", snapshot=>{
          snapshot.forEach(snap => {
              list1.push({id: snap.key ,...snap.val()});
              
          });
        
          setsp_data(list1);
        });
        
       
       } catch(err){
  
       }
    },[])

    const handleDelete = (id) => {
    
        setsp_data(sp_data.filter((item) => item.id !== id));
        firebase.database().ref().child('Users').child("Service Provider").child("Personal Info").child(id).remove()
        window.location.href='/service_provider'
  
      };
       const handleVeiw=(id)=>{
      localStorage.setItem('id', id);
      
       }

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/service_provider_view" style={{ textDecoration: "none" }}>
                  <div 
                  className="viewButton"
                  onClick={() => handleVeiw(params.row.id)}
                  >View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              
              </div>
            );
          },
        },
      ];
  return (
    <div>     
     <h2 style={{ fontSize: '20px', marginLeft :"30px",marginTop:"25px"}}>Service Provider</h2>
   
    <div className="datatable">
    <DataGrid
   rows={sp_data}
   columns={userColumns.concat(actionColumn)}
   pageSize={9}
   rowsPerPageOptions={[9]}
 />
   </div>
   </div>
  )
}

export default Sp_Data