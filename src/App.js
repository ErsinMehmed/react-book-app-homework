import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Book/Create";

import ProtectedRoute from "./components/layouts/Protected";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="books">
          <Route path="create" element={<Create />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
