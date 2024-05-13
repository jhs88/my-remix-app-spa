import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link } from "@remix-run/react";

export default function SideBar() {
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
