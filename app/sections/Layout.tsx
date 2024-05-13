import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SideBar from "~/sections/SideBar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
        <Grid item justifyContent="center" alignItems="center" xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
