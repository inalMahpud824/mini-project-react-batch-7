import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "./components/Loading";

export const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const auth = localStorage.getItem("Autentication");
    if (!auth) {
      setIsAuthenticated(false);
      return
    }else if(auth === "true") {
      setIsAuthenticated(true);
      return
    }
  }, [])
  
 if (isAuthenticated === null) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};