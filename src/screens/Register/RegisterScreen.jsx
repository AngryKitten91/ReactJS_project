import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, Link } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

const labels = {
  pageName: "Sign up",
  LogIn: "Log in",
  inputLabels: {
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
  },
};

function RegisterScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const navigate = useNavigate();

  return (
    <CenterItems>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography align="left" component="h1" variant="h5">
              {labels.pageName}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={labels.inputLabels.email}
                name="email"
                autoComplete="email"
                variant="filled"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={labels.inputLabels.password}
                type="password"
                id="password"
                variant="filled"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label={labels.inputLabels.confirmPassword}
                type="password"
                id="confirmPassword"
                variant="filled"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {labels.pageName}
              </Button>
            </Box>
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
          </Box>
        </Paper>
      </Container>
    </CenterItems>
  );
}

export default RegisterScreen;
