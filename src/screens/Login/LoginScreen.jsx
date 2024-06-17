import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Container, Box, TextField, Button } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { TopBar } from "../../components/TopBar";
import { LoginFooter } from "../../components/LoginFooter";
import { PageName } from "../../components/PageName";
import routes from "../../routes/routes";
import { labels, inputLabels, errorMessage } from "../../labels/labels";
import { Info } from "../../components/Info";
import { useUserCRUD } from "../../hooks/useUserCRUD";

const LoginScreen = () => {
  const { user, login } = useUserCRUD();
  const [status, setStatus] = useState("");

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    if (user === null) {
      setStatus(errorMessage.userDontExist);
    } else if (user?.password !== password || user?.email !== email) {
      setStatus(errorMessage.wrongData);
    } else if (user?.password === password && user?.email === email) {
      login();
      navigate(routes.dashboard.path);
    }
  };

  if (user?.isAuthenticated) {
    return <Navigate to={routes.dashboard.path} replace />;
  }

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
              <PageName name={labels.login.pageName} />
              <Info info={status} />
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                  mt: 1,
                }}
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
                  type="text"
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {labels.login.pageName}
                </Button>
              </Box>
              <LoginFooter />
            </Box>
          </Paper>
        </Container>
      </CenterItems>
    </>
  );
};

export default LoginScreen;
