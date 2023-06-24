import React, { useEffect, useReducer } from "react";
import "../styles.css";
import { reducer } from "../utils/reducer";
import { AddressList } from "./AddressList";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
} from "../utils/services";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: 0,
  addresses: [],
};

export const CreateEmployee = () => {
  const { employeeId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (employeeId) {
      getEmployeeById(employeeId).then(({ data }) => {
        dispatch({ type: "StateUpdate", payload: data });
      });
    }
  }, []);

  const handleCreateEmployee = (e) => {
    e.preventDefault();

    createEmployee(state)
      .then((data) => {
        toast("Employee Created", { type: "success" });
        dispatch({ type: "StateClear" });
      })
      .catch((error) => {
        toast("Error " + error.message);
      });
  };
  const handleUpdateEmployee = (e) => {
    e.preventDefault();
    updateEmployeeById(employeeId, state)
      .then((data) => {
        toast("Employee Updated", { type: "success" });
      })
      .catch((error) => {
        toast("Error " + error.message);
      });
  };

  const dispatchAction = (action) => {
    dispatch(action);
    console.log("state is : ", state.addresses);
  };

  return (
    <div className="container">
      <div style={{ height: "100px" }}></div>
      <form action="submit">
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e) =>
              dispatch({ type: "FirstName", payload: e.target.value })
            }
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={(e) =>
              dispatch({ type: "LastName", payload: e.target.value })
            }
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "Email", payload: e.target.value })
            }
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            type="number"
            name="Phone"
            value={state.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "Phone", payload: e.target.value })
            }
            className="form-control"
          />
        </div>

        <AddressList state={state} dispatchAction={dispatchAction} />

        {employeeId ? (
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "24px" }}
            onClick={handleUpdateEmployee}
          >
            Edit Employee
          </button>
        ) : (
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "24px" }}
            onClick={handleCreateEmployee}
          >
            Create Employee
          </button>
        )}
        <Link
          className="btn btn-danger"
          to="/"
          style={{ width: "100%", marginTop: "12px" }}
        >
          <span>Go Back</span>
        </Link>
      </form>
      <ToastContainer />
    </div>
  );
};
