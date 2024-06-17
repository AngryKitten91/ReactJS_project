import routes from "../routes/routes";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const labels = {
  LogIn: "Log in",
};

export const RegisterFooter = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          navigate(routes.login.path);
        }}
      >
        {labels.LogIn}
      </Link>
    </Box>
  );
};
