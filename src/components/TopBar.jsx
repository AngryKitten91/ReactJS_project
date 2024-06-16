import AppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Toolbar, Typography, Box } from "@mui/material";

const defaultAppName = "Test App";

export const TopBar = ({ name = defaultAppName }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              {name}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
