import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Book/Create";
import Edit from "./pages/Book/Edit";

import ProtectedRoute from "./components/layouts/Protected";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard">
          <Route index element={<Dashboard />} />

          <Route path="books">
            <Route path="create" element={<Create />} />
            <Route path=":id/edit" element={<Edit />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
