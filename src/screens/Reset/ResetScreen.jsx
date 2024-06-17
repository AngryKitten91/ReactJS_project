import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Paper, Container, Box, TextField, Button } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { TopBar } from "../../components/TopBar";
import { PageName } from "../../components/PageName";
import routes from "../../routes/routes";
import { labels, inputLabels, errorMessage } from "../../labels/labels";

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
              <PageName name={labels.reset.pageName} />

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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {labels.reset.pageName}
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
