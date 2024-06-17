import { Navigate } from "react-router-dom";
import routes from "../routes/routes";

import { useUserStore } from "../store/useUser";

export const ProtectedRoute = ({ children }) => {

  const user = useUserStore((state) => state.user);

  if (!user?.isAuthenticated) {
    return <Navigate to={routes.login.path} replace />;
  }
  return children;
};
