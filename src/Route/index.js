import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const userToken = useSelector((state) => state.userToken);
  if (userToken) {
    return <Navigate to="/" replace />;
  }
  return children ? children : <Outlet />;
};
export const PrivateRoute = ({ children }) => {
  const userToken = useSelector((state) => state.userToken);

  if (!userToken) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};
