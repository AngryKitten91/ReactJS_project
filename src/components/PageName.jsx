import { Typography } from "@mui/material";

export const PageName = ({ name }) => {
  return (
    <Typography align="left" component="h1" variant="h5">
      {name}
    </Typography>
  );
};
