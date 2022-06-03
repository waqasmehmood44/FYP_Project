import  "./datatable.scss";
import React, { useEffect } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import {userColumns,userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import firebase from "../../util/firebasee";
import { margin, padding } from "@mui/system";
 


 
const Datatable = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
     //Fetch User Data
     try{
      let list=[];
      firebase.database().ref().child('Users').child("Customer").child("Personal Info")
      .on("value", snapshot=>{
        snapshot.forEach(snap => {
            list.push({id: snap.key ,...snap.val()});
            
        });
      
          setData(list);
      });
      
     
     } catch(err){

     }


    },[])
    // Handle Delete Button
     const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
      firebase.database().ref().child('Users').child("Customer").child("Personal Info").child(id).remove()
      window.location.href='/'

    };
     // Handle View Button
     const handleVeiw=(id)=>{
    localStorage.setItem('ID', id);
      }
  
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/viewdata" style={{ textDecoration: "none" }}>
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
      <h2 style={{ fontSize: '20px', marginLeft :"30px", justifyContent:"center"}}>Users</h2>
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

export default Datatable