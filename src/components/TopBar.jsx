import AppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Toolbar, Typography, Box, Button } from "@mui/material";
import { useUserCRUD } from "../hooks/useUserCRUD";

const defaultAppName = "Test App";

export const TopBar = ({ name = defaultAppName }) => {
  const { user, logout } = useUserCRUD();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
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
            </Box>

            {user?.isAuthenticated && (
              <Button onClick={logout} variant="contained">
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
