import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Book/Create";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Login />}
      />

      <Route
        path='/register'
        element={<Register />}
      />

      <Route
        path='/dashboard'
        element={<Dashboard />}
      />

      <Route
        path='dashboard/book/add'
        element={<Create />}
      />
    </Routes>
  );
}

export default App;
