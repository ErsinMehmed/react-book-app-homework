import { Navigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function ProtectedRoute() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  if (!userData) {
    return <Navigate to="/login" />;
  }

  return <AppLayout />;
}
