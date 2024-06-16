import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CenterItems } from "../../components/CenterItems";
import routes from "../../routes/routes";
import { BoxNavigation } from "../../components/BoxNavigation";
import { TopBar } from "../../components/TopBar";

const labels = {
  pageName: "Pick module",
  sections: [
    { name: "Users Management", path: routes.users.path },
    { name: "Jobs Directory", path: routes.users.path },
  ],
};

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <CenterItems>
        <Container component="main" maxWidth="xs">
          <Typography sx={{ mb: 2 }} align="center" component="h1" variant="h5">
            {labels.pageName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {labels.sections.map(({ name, path }, i) => (
              <BoxNavigation key={i} nav={path} name={name} />
            ))}
          </Box>
        </Container>
      </CenterItems>
    </>
  );
}

export default Dashboard;
