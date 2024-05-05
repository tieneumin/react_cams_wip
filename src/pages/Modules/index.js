import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import DetailsCard from "../../components/DetailsCard";

export default function Modules() {
  let modules = JSON.parse(localStorage.getItem("modules"));
  if (!modules) modules = [];

  return (
    <>
      <Navbar />
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h5" gutterBottom>
            Modules
          </Typography>
          <Button variant="contained" component={Link} to="/modules/add">
            Add Module
          </Button>
        </Box>
        {modules.length === 0 ? (
          <Card>
            <CardContent sx={{ mb: -0.5 }}>
              <Typography variant="h6">No module added yet.</Typography>
            </CardContent>
          </Card>
        ) : (
          <Grid container spacing={2}>
            {modules.map((module) => (
              <Grid item xs={12} key={module.id}>
                <DetailsCard type="index" module={module} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
