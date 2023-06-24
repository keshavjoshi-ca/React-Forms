import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard";
import { ToastContainer, toast } from "react-toastify";
import { getEmployee } from "../utils/services";

export const Employees = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    getEmployee()
      .then(({ data }) => {
        setEmployee(data);
      })
      .catch((err) => console.log("error : ", err));
  };

  const deleteEmployeeMessage = () => {
    toast("Employee Deleted", { type: "success" });
    fetchEmployee();
  };

  if (employee.length == 0) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Employee</h1>
        <Link className="btn btn-success" to="/employee">
          <span>Add Employee</span>
        </Link>
      </div>
      {employee.map((employ, index) => (
        <EmployeeCard
          key={index}
          employee={employ}
          deleteEmployeeMessage={deleteEmployeeMessage}
        />
      ))}
      <ToastContainer />
    </>
  );
};
