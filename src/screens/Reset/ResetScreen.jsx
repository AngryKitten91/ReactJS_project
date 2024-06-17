import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { TopBar } from "../../components/TopBar";
import { useForm } from "react-hook-form";
import routes from "../../routes/routes";
import { useNavigate } from "react-router-dom";

const labels = {
  pageName: "Reset Password",
  inputLabels: {
    email: "Email Address",
  },
};

const errorMessage = {
  email: "Email adress i required",
};

const ResetScreen = () => {
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

  const onSubmit = (data) => {
    console.log(data);
    navigate(routes.login.path);
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {labels.pageName}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </CenterItems>
    </>
  );
};

export default ResetScreen;
