import routes from "../routes/routes";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const labels = {
  createAcount: "Create account",
  forgotAccount: "Forgot Password?",
};

export const LoginFooter = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          navigate(routes.register.path);
        }}
      >
        {labels.createAcount}
      </Link>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          navigate(routes.reset.path);
        }}
      >
        {labels.forgotAccount}
      </Link>
    </Box>
  );
};
