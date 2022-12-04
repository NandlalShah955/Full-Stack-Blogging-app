import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Privateroute from "../Components/Privateroute";
import AdminPanel from "./AdminPanel";
function Allroutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <Privateroute>
            <AdminPanel />
          </Privateroute>
        }
      ></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default Allroutes;
