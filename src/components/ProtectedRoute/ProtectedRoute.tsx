import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FC } from "react";

interface ProtectedRouteProps {
  onlyForAuth: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ onlyForAuth }) => {
  const [cookies] = useCookies(["token"]);

  if (!cookies.token && onlyForAuth) {
    return <Navigate to="/signin" />;
  }

  if (cookies.token && !onlyForAuth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
