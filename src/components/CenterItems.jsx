import { Grid } from "@mui/material";

export const CenterItems = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {children}
    </Grid>
  );
};
