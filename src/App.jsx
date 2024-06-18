import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import routes from "./routes/routes.js";
import { LoginScreen } from "./screens/Login/LoginScreen";
import { RegisterScreen } from "./screens/Register/RegisterScreen";
import { ResetScreen } from "./screens/Reset/ResetScreen";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { UsersManagementScreen } from "./screens/UserManagement/UsersManagementScreen";
import { JobsDirectoryScreen } from "./screens/JobsDirectory/JobsDirectoryScreen.jsx";
import { ProtectedRoute } from "./providers/ProtectedRoute.jsx";
import { Navigate } from "react-router-dom";

// added for git hub pages purposes
const BASE_URL_NAME = "ReactJS_project";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginScreen />,
    },
    {
      path: routes.login.path,
      element: <LoginScreen />,
    },
    {
      path: routes.register.path,
      element: <RegisterScreen />,
    },
    {
      path: routes.reset.path,
      element: <ResetScreen />,
    },
    {
      path: routes.dashboard.path,
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: routes.users.path,
      element: (
        <ProtectedRoute>
          <UsersManagementScreen />
        </ProtectedRoute>
      ),
    },
    {
      path: routes.jobs.path,
      element: (
        <ProtectedRoute>
          <JobsDirectoryScreen />
        </ProtectedRoute>
      ),
    },
    {
      path: "/*",
      element: <Navigate to={routes.login.path} />,
    },
  ],
  {
    basename: `/${BASE_URL_NAME}`,
  }
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
