import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

export const BoxNavigation = ({ nav, name }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Paper
      onClick={() => {
        navigate(nav);
      }}
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "150px", sm: "250px" },
        minWidth: "250px",
        width: { xs: 1 },
        ":hover": {
          cursor: "pointer",
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      <Typography
        // sx={{ m: 10 }}
        align="center"
        component="h1"
        variant="subtitle1"
      >
        {name}
      </Typography>
    </Paper>
  );
};
