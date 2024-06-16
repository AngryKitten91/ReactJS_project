import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { CenterItems } from "../../components/CenterItems";

const labels = {
  pageName: "Reset Password",
  inputLabels: {
    email: "Email Address",
  },
};

function ResetScreen() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
  );
}

export default ResetScreen;
