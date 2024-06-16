import { Navigate } from "react-router-dom";
import routes from "../routes/routes";

// import { useUserStore } from "../../store/useUserStore";

export const ProtectedRoute = ({ children }) => {
  const user = null;
  if (user === null) {
    return <Navigate to={routes.login.path} replace />;
  }
  return children;
};
