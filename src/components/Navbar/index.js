import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material/";
import SchoolIcon from "@mui/icons-material/School";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow="1">
          <IconButton color="inherit" component={Link} to="/">
            <SchoolIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            CAMS
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/students">
          Students
        </Button>
        <Button color="inherit" component={Link} to="/modules">
          Modules
        </Button>
        <Button color="inherit" component={Link} to="/attendance">
          Attendance
        </Button>
      </Toolbar>
    </AppBar>
  );
}
