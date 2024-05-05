import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function NotFound(props) {
  const { type = "page" } = props;
  return (
    <>
      <Box textAlign="center">
        <Typography variant="h5" sx={{ mb: 2 }}>
          {type === "page"
            ? "404: Page Not Found"
            : type === "module"
            ? "Module does not exist."
            : // type === "student" ?
              "Student profile does not exist."}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={
            type === "page"
              ? "/"
              : type === "module"
              ? "/modules" // type === "student" ?
              : "/students"
          }
        >
          Go back
        </Button>
      </Box>
    </>
  );
}
