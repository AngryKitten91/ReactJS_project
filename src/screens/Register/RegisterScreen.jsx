import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
import routes from "../../routes/routes";
import { useForm } from "react-hook-form";
import { RegisterFooter } from "../../components/RegisterFooter";

const labels = {
  pageName: "Sign up",
  inputLabels: {
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
  },
};

const errorMessage = {
  email: "Email adress i required",
  password: "Password i required (min. 8 characters)",
};

const RegisterScreen = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(routes.dashboard.path);
  };

  return (
    <>
      <TopBar />
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
                onSubmit={handleSubmit(onSubmit)}
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
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email", {
                    required: { value: true, message: errorMessage.email },
                    pattern: /^\S+@\S+$/i,
                  })}
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
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password", {
                    required: { value: true, message: errorMessage.password },
                    minLength: 8,
                  })}
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
                  error={!!errors.confirmPassword}
                  helperText={errors.password?.message}
                  {...register("confirmPassword", {
                    required: { value: true, message: errorMessage.password },
                    minLength: 8,
                  })}
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
              <RegisterFooter />
            </Box>
          </Paper>
        </Container>
      </CenterItems>
    </>
  );
};

export default RegisterScreen;
