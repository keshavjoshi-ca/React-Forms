import React from "react";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../utils/services";

export const EmployeeCard = ({ employee, deleteEmployeeMessage }) => {
  return (
    <div
      key={employee.id}
      style={{
        padding: "32px",
        backgroundColor: "#efefef",
        marginTop: "12px",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3>{employee.firstName}</h3>
        <h3 style={{ marginLeft: "8px" }}>{employee.lastName}</h3>
      </div>
      <h6>E: {employee.email}</h6>
      <h6>M: {employee.phoneNumber}</h6>
      {employee.addresses &&
        employee.addresses.map((addr, index) => {
          return (
            <div key={index} style={{ paddingTop: "12px" }}>
              <h6>
                {addr.apartmentNumber} {addr.streetName}, {addr.postalCode},{" "}
                {addr.state}, {addr.country}
              </h6>
              <h6></h6>
            </div>
          );
        })}

      <div
        className="container"
        style={{
          width: "25%",
          height: "100%",
          position: "absolute",
          right: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Link
          to={`/employee/${employee.id}`}
          className="btn btn-primary"
          style={{ width: "100%", margin: "1px" }}
        >
          <span style={{ fontSize: "medium" }}>Edit</span>
        </Link>
        <button
          className="btn btn-danger"
          style={{ width: "100%", margin: "1px" }}
          onClick={() => {
            const response = confirm("Are you sure ?");
            if (response) {
              deleteEmployee(employee.id).then((response) =>
                deleteEmployeeMessage()
              );
            }
          }}
        >
          <span style={{ fontSize: "medium" }}>Delete</span>
        </button>
      </div>
    </div>
  );
};
