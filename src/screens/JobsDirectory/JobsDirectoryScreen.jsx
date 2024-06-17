import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CenterItems } from "../../components/CenterItems";
import { BackButton } from "../../components/BackButton";
import { TopBar } from "../../components/TopBar";

export const JobsDirectoryScreen = () => {
  return (
    <>
      <TopBar />
      <Container component="main">
        <BackButton />
        <CenterItems>
          <Typography sx={{ mb: 2 }} align="center" component="h1" variant="h5">
            UNDER CONSTRUCTION
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: "15px",
            }}
          ></Box>
        </CenterItems>
      </Container>
    </>
  );
};
