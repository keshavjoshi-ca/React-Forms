import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./components/CreateEmployee";
import { Employees } from "./components/Employees";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employee/:employeeId?" element={<CreateEmployee />} />
      </Routes>
    </div>
  );
};
