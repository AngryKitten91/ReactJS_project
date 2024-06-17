import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Container, Box, TextField, Button } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { TopBar } from "../../components/TopBar";
import { RegisterFooter } from "../../components/RegisterFooter";
import { PageName } from "../../components/PageName";
import routes from "../../routes/routes";
import { labels, inputLabels, errorMessage } from "../../labels/labels";

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
    watch,
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
              <PageName name={labels.register.pageName} />

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
                  label={inputLabels.email}
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
                  label={inputLabels.password}
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
                  label={inputLabels.confirmPassword}
                  type="password"
                  id="confirmPassword"
                  variant="filled"
                  autoComplete="current-password"
                  error={!!errors.confirmPassword}
                  helperText={
                    errors.password?.message ?? errors.confirmPassword?.message
                  }
                  {...register("confirmPassword", {
                    required: { value: true, message: errorMessage.password },
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return errorMessage.confirmPassword;
                      }
                    },
                    minLength: 8,
                  })}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {labels.register.pageName}
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
