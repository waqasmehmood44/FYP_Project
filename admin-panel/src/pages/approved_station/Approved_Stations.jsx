import "./approved_stations.scss"
import React, { useEffect } from 'react'
import { DataGrid} from '@mui/x-data-grid';
// import {userColumns} from "../../ss_datatable_source";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import firebase from "../../util/firebasee";

const Approved_Stations = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        //Fetch Approved Service Station Requests
        try{
         let list=[];
         firebase.database().ref().child('Users').child("Service Provider").child("Approved Service Stations")
         .on("value", snapshot=>{
           snapshot.forEach(snap => {
               list.push({id: snap.key ,...snap.val()});
               
           });
         
             setData(list);
         });
         
        
        } catch(err){
   
        }
   
   
       },[])
       const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        firebase.database().ref().child('Users').child("Service Provider").child("Approved Service Stations").child(id).remove()
        window.location.href='/approved_stations'
  
      };
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
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
    const userColumns = [
        // { field: "id", headerName: "ID", width: 70 },
        { 
          field: "user",
          headerName: "Image",
          width: 150,
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
          width: 150,
        },
         {
          field: "address",
          headerName: "Address",
          width: 230,
        },
        {
            field: ""+"phone_no",
            headerName: "Phone No",
            width: 230,
          }
        
      ];
  return (
    <div className='service_provider'>
    <Sidebar/>  
    <div className="SP_Container">   
    <Navbar/>
    <hr/>
    <div><h2 style={{ fontSize: '20px', marginLeft :"30px",marginTop:"25px"}}>Service Stations</h2>
    <div className="widgets">
    <div className="datatable">
         <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
        </div>
    </div>
    </div> 
  </div>
  </div>
  )
}

export default Approved_Stations