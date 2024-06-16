import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import routes from "./routes/routes.js";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import ResetScreen from "./screens/Reset/ResetScreen";
import Dashboard from "./screens/Dashboard/Dashboard";
import UsersManagementScreen from "./screens/UserManagement/UsersManagementScreen";

const router = createBrowserRouter([
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
    element: <Dashboard />,
  },
  {
    path: routes.users.path,
    element: <UsersManagementScreen />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
