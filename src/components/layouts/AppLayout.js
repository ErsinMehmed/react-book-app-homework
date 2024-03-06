import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <>
      {!userData && <Navigate to="/login" />}

      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
