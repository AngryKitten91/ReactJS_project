import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import routes from "./routes/routes.js";
import LoginScreen from "./screens/Login/LoginScreen.jsx";
import RegisterScreen from "./screens/Register/RegisterScreen.jsx";
import ResetScreen from "./screens/Reset/ResetScreen.jsx";
import Dashboard from "./screens/Dashboard/Dashboard.jsx";

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
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
