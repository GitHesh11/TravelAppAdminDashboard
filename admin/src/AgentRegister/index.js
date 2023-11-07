import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AgentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    contactNumber1: "",
    contactNumber2: "",
    address: "",
  });

  const { name, nic, contactNumber1, contactNumber2, address } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">
          <b>Agent Register</b>
        </h5>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Agency Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Agent User Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Contact Number 1 <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="contactNumber1"
                value={contactNumber1}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Contact Number 2
              </label>
              <input
                type="number"
                className="form-control"
                name="contactNumber2"
                value={contactNumber2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="address"
                value={address}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="col-lg-4 mb-3 ">
              <label for="name" className="form-label">
                Re-enter Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="address"
                value={address}
                required
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentRegister;
