import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Link } from "@remix-run/react";

export default function Content({ children }: { children?: React.ReactNode }) {
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

function SideBar() {
  return (
    <Box component="nav" justifyContent="center">
      <MuiLink component={Link} to="/">
        <Typography variant="h3" gutterBottom>
          Remix SPA
        </Typography>
      </MuiLink>
    </Box>
  );
}
