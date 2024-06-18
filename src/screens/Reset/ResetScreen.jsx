import { useNavigate } from "react-router-dom";
import { useState } from "react";
import routes from "../../routes/routes";
import { labels, inputLabels, errorMessage } from "../../labels/labels";
import { Paper, Container, Box, TextField, Button } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";
import { TopBar } from "../../components/TopBar";
import { PageName } from "../../components/PageName";
import { RegisterFooter } from "../../components/RegisterFooter";
import { useUserCRUD } from "../../hooks/useUserCRUD";
import { Info } from "../../components/Info";
import { useFormHook } from "../../hooks/useFormHook";

const ResetScreen = () => {
  const { user, reset } = useUserCRUD();
  const [status, setStatus] = useState("");
  const { register, handleSubmit, errors } = useFormHook();

  const navigate = useNavigate();

  const onSubmit = ({ email }) => {
    if (!user) {
      setStatus(errorMessage.userDontExist);
    } else if (email !== user.email) {
      setStatus(errorMessage.userDontExist);
    } else {
      reset();
      setStatus(errorMessage.userReset);
      setTimeout(() => {
        navigate(routes.register.path);
      }, 2000);
    }
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
              <Info info={status} />
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
                  helperText={
                    errors.email?.message === ""
                      ? errorMessage.wrongMail
                      : errors.email?.message
                  }
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
                <RegisterFooter />
              </Box>
            </Box>
          </Paper>
        </Container>
      </CenterItems>
    </>
  );
};

export default ResetScreen;
