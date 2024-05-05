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

export default function Students() {
  let students = JSON.parse(localStorage.getItem("students"));
  if (!students) students = [];

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
            Students
          </Typography>
          <Button variant="contained" component={Link} to="/students/add">
            Add Student
          </Button>
        </Box>
        {students.length === 0 ? (
          <Card>
            <CardContent sx={{ mb: -0.5 }}>
              <Typography variant="h6">No student added yet.</Typography>
            </CardContent>
          </Card>
        ) : (
          <Grid container spacing={2}>
            {students.map((student) => (
              <Grid item xs={12} key={student.id}>
                <DetailsCard type="index" student={student} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
