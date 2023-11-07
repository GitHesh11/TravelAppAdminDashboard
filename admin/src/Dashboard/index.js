import * as React from "react";
import { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Dashboard = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [pageSize, setPageSize] = useState(5);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

  const rows = [
    {
      id: "1",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
    {
      id: "2",
      name: "Travel Safe",
      address: "Colombo 10",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "10",
    },
    {
      id: "3",
      name: "Travel Today",
      address: "Colombo 05",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "45",
    },
    {
      id: "4",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
    {
      id: "5",
      name: "Bhagya Travels",
      address: "Colombo 03",
      contact: "0785231458",
      date: "2022-01-09",
      bookings: "58",
    },
  ];

  const columns = [
    {
      field: "name",
      headerName: "Travel Agent",
      flex: 1,
      renderCell: (params) => <div>{params.row.name}</div>,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: (params) => <div>{params.row.address}</div>,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      renderCell: (params) => <div>{params.row.contact}</div>,
    },
    {
      field: "date",
      headerName: "Registered Date",
      flex: 1,
      renderCell: (params) => <>{params.row.date}</>,
    },
    {
      field: "bookings",
      headerName: "Completed Bookings",
      flex: 1,
      renderCell: (params) => <div>{params.row.bookings}</div>,
    },
    {
      field: "view",
      headerName: "Edit",
      flex: 1,
      renderCell: (params) => (
        <i
          className="bi bi-pencil-square"
          style={{ color: "green", fontSize: "25px", cursor: "pointer" }}
        ></i>
      ),
    },
  ];

  return (
    <>
      <div className="row mb-2">
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#5BA4AA" }}>
            <div className="card-body">
              <h5 className="card-title">
                New Travel Agents{" "}
                <CheckCircleOutlineIcon
                  fontSize="large"
                  style={{ color: "#FFFFFF", marginBottom: "5px" }}
                >
                  {" "}
                </CheckCircleOutlineIcon>
              </h5>
              <h2 className="card-text">10</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#4095C4" }}>
            <div className="card-body">
              <h5 className="card-title">
                Total Travel Agents{" "}
                <GroupsIcon
                  fontSize="large"
                  style={{ color: "#FFFFFF", marginBottom: "5px" }}
                ></GroupsIcon>
              </h5>
              <h2 className="card-text">20</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#2C6BAA" }}>
            <div className="card-body">
              <h5 className="card-title">
                Last Month Income{" "}
                <AttachMoneyIcon
                  fontSize="large"
                  style={{ color: "#FFFFFF", marginBottom: "5px" }}
                ></AttachMoneyIcon>
              </h5>
              <h2 className="card-text">250000.00</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-2">
          <div className="card" style={{ backgroundColor: "#404FA5" }}>
            <div className="card-body">
              <h5 className="card-title">
                This Month Income{" "}
                <AttachMoneyIcon
                  fontSize="large"
                  style={{ color: "#FFFFFF", marginBottom: "5px" }}
                ></AttachMoneyIcon>
              </h5>
              <h2 className="card-text">56000.00</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-2 mb-2">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={age} onChange={handleChange}>
            <MenuItem value={10}>Ongoing Rentals</MenuItem>
            <MenuItem value={20}>Late Returns</MenuItem>
            <MenuItem value={30}>Finished Rentals</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          loading={false}
          getRowId={(row) => row.id}
          components={{ Toolbar: CustomToolbar }}
        />
      </div>
    </>
  );
};

export default Dashboard;
