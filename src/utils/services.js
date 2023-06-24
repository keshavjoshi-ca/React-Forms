import axios from "axios";

const url = "https://procom-interview-employee-test.azurewebsites.net/Employee";

export const getEmployee = () => {
  return axios.get(url);
};
export const getEmployeeById = (employeeId) => {
  return axios.get(`${url}/${employeeId}`);
};

export const createEmployee = (state) => {
  return axios.post(`${url}`, state);
};

export const updateEmployeeById = (employeeId, state) => {
  return axios.put(`${url}/${employeeId}`, state);
};

export const deleteEmployee = async (employeeId) => {
  return axios.delete(`${url}/${employeeId}`);
};
