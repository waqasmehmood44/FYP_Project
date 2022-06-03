export const userColumns = [
    // { field: "id", headerName: "ID", width: 70 },
    { 
      field: "user",
      headerName: "Image",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.dpimg} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
  
  
    {
      field: "id",
      headerName: "ID",
      width: 230,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "password",
      headerName: "Password",
      width: 230,
    },
    
  ];
  
 